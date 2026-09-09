<?php

require_once __DIR__ . '/../config/auth.php';
require_admin();

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

if (isset($_FILES['pdf'])) {
    $file = $_FILES['pdf'];
    if ($file['error'] !== UPLOAD_ERR_OK || !is_uploaded_file($file['tmp_name'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'The PDF upload failed.']);
        exit;
    }

    if ($file['size'] > 10 * 1024 * 1024) {
        http_response_code(413);
        echo json_encode(['success' => false, 'message' => 'PDF files must be 10 MB or smaller.']);
        exit;
    }

    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = $finfo ? finfo_file($finfo, $file['tmp_name']) : false;
    if ($finfo) {
        finfo_close($finfo);
    }

    if ($mime !== 'application/pdf') {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Only PDF files are allowed."]);
        exit;
    }

    $uploadDir = __DIR__ . '/../uploads/pdfs/';
    if (!is_dir($uploadDir)) {
        if (!mkdir($uploadDir, 0755, true) && !is_dir($uploadDir)) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Upload directory is unavailable.']);
            exit;
        }
    }

    $fileName = bin2hex(random_bytes(16)) . '.pdf';
    $targetFilePath = $uploadDir . $fileName;

    if (move_uploaded_file($file['tmp_name'], $targetFilePath)) {
        $apiBasePath = rtrim(str_replace('\\', '/', dirname(dirname($_SERVER['SCRIPT_NAME']))), '/');
        $publicUrl = $apiBasePath . '/uploads/pdfs/' . $fileName;
        echo json_encode(["success" => true, "file_url" => $publicUrl]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to move uploaded file."]);
    }
} else {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No PDF file was provided.']);
}