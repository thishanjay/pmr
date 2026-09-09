<?php

require_once __DIR__ . '/../config/auth.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit('Method not allowed.');
}

verify_csrf();
$id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT);
if (!$id) {
    http_response_code(400);
    exit('Invalid member ID.');
}

require_once __DIR__ . '/../config/database.php';
$stmt = Database::getConnection()->prepare('DELETE FROM editorial_board WHERE id = ?');
$stmt->execute([$id]);
header('Location: dashboard.php');
exit;