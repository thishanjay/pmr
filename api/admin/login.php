<?php

require_once __DIR__ . '/../config/auth.php';

if (!empty($_SESSION['admin_logged_in'])) {
    header('Location: dashboard.php');
    exit;
}

$error = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $passwordHash = getenv('PMR_ADMIN_PASSWORD_HASH') ?: '';
    if ($passwordHash !== '' && password_verify($_POST['password'] ?? '', $passwordHash)) {
        session_regenerate_id(true);
        $_SESSION['admin_logged_in'] = true;
        csrf_token();
        header('Location: dashboard.php');
        exit;
    }
    $error = 'Invalid password.';
}
?>
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>PMR Admin Login</title></head>
<body>
    <h1>PMR Admin Login</h1>
    <?php if ($error): ?><p><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></p><?php endif; ?>
    <form method="POST">
        <label>Password <input type="password" name="password" required autofocus></label>
        <button type="submit">Log in</button>
    </form>
</body>
</html>