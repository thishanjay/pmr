<?php

session_start([
    'cookie_httponly' => true,
    'cookie_samesite' => 'Lax',
    'cookie_secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
]);

function require_admin(): void
{
    if (empty($_SESSION['admin_logged_in'])) {
        http_response_code(401);
        if (str_contains($_SERVER['SCRIPT_NAME'] ?? '', '/admin/dashboard.php')) {
            header('Location: login.php');
        } else {
            header('Content-Type: application/json; charset=UTF-8');
            echo json_encode(['success' => false, 'message' => 'Unauthorized access.']);
        }
        exit;
    }
}

function csrf_token(): string
{
    return $_SESSION['csrf_token'] ??= bin2hex(random_bytes(32));
}

function verify_csrf(): void
{
    if (!hash_equals($_SESSION['csrf_token'] ?? '', $_POST['csrf_token'] ?? '')) {
        http_response_code(403);
        exit('Invalid request token.');
    }
}