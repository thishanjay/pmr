<?php

require_once __DIR__ . '/../config/auth.php';
require_once __DIR__ . '/../config/database.php';

if (!empty($_SESSION['admin_logged_in'])) {
    header('Location: dashboard.php');
    exit;
}

$error = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';
    $pdo = Database::getConnection();
    $stmt = $pdo->prepare('SELECT username, password_hash FROM admins WHERE username = ? LIMIT 1');
    $stmt->execute([$username]);
    $admin = $stmt->fetch();

    if ($admin && password_verify($password, $admin['password_hash'])) {
        session_regenerate_id(true);
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_user'] = $admin['username'];
        csrf_token();
        header('Location: dashboard.php');
        exit;
    }
    $error = 'Invalid username or password.';
}
?>
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>PMR Admin Login</title></head>
<body>
    <h1>PMR Admin Login</h1>
    <?php if ($error): ?><p><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></p><?php endif; ?>
    <form method="POST">
        <label>Username <input type="text" name="username" required autofocus></label>
        <label>Password <input type="password" name="password" required></label>
        <button type="submit">Log in</button>
    </form>
</body>
</html>