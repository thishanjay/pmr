<?php

require_once __DIR__ . '/../config/auth.php';
require_admin();

$isDashboardRedirect = ($_POST['redirect'] ?? '') === 'dashboard.php';

function upload_response(array $payload, int $status = 200, bool $redirect = false): void
{
    if ($redirect) {
        $location = $payload['success']
            ? 'dashboard.php?uploaded=1'
            : 'dashboard.php?upload_error=' . rawurlencode($payload['message']);
        header('Location: ' . $location);
        exit;
    }

    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($payload);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    upload_response(['success' => false, 'message' => 'Method not allowed.'], 405, $isDashboardRedirect);
}

verify_csrf();

if (isset($_FILES['pdf'])) {
    $file = $_FILES['pdf'];
    if ($file['error'] !== UPLOAD_ERR_OK || !is_uploaded_file($file['tmp_name'])) {
        upload_response(['success' => false, 'message' => 'The PDF upload failed.'], 400, $isDashboardRedirect);
    }

    if ($file['size'] > 10 * 1024 * 1024) {
        upload_response(['success' => false, 'message' => 'PDF files must be 10 MB or smaller.'], 413, $isDashboardRedirect);
    }

    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = $finfo ? finfo_file($finfo, $file['tmp_name']) : false;
    if ($finfo) {
        finfo_close($finfo);
    }

    if ($mime !== 'application/pdf') {
        upload_response(['success' => false, 'message' => 'Only PDF files are allowed.'], 400, $isDashboardRedirect);
    }

    $uploadDir = __DIR__ . '/../uploads/pdfs/';
    if (!is_dir($uploadDir)) {
        if (!mkdir($uploadDir, 0755, true) && !is_dir($uploadDir)) {
            upload_response(['success' => false, 'message' => 'Upload directory is unavailable.'], 500, $isDashboardRedirect);
        }
    }

    $fileName = bin2hex(random_bytes(16)) . '.pdf';
    $targetFilePath = $uploadDir . $fileName;

    if (move_uploaded_file($file['tmp_name'], $targetFilePath)) {
        $apiBasePath = rtrim(str_replace('\\', '/', dirname(dirname($_SERVER['SCRIPT_NAME']))), '/');
        $publicUrl = $apiBasePath . '/uploads/pdfs/' . $fileName;
        upload_response(['success' => true, 'file_url' => $publicUrl], 200, $isDashboardRedirect);
    } else {
        upload_response(['success' => false, 'message' => 'Failed to move uploaded file.'], 500, $isDashboardRedirect);
    }
} else {
    upload_response(['success' => false, 'message' => 'No PDF file was provided.'], 400, $isDashboardRedirect);
}