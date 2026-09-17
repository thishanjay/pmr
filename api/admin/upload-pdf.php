<?php

require_once __DIR__ . '/../config/auth.php';
require_admin();
verify_csrf();

$redirect = $_POST['redirect'] ?? 'dashboard.php';

if (!isset($_FILES['pdf']) || $_FILES['pdf']['error'] !== UPLOAD_ERR_OK) {
    header('Location: ' . $redirect . '?upload_error=Please select a valid PDF file.');
    exit;
}

// 1. Get Volume and Issue from dashboard.php POST request
$volume = (int)($_POST['volume'] ?? 1);
$issue = (int)($_POST['issue'] ?? 1);

$fileTmpPath = $_FILES['pdf']['tmp_name'];
$fileName = $_FILES['pdf']['name'];
$fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

if ($fileExtension !== 'pdf') {
    header('Location: ' . $redirect . '?upload_error=Only PDF files are allowed.');
    exit;
}

// 2. Define directory based on selected Volume and Issue
$subDirectory = "volume{$volume}/issue{$issue}/";
$targetFolder = __DIR__ . '/../uploads/' . $subDirectory;

// 3. Create folder if it doesn't exist
if (!is_dir($targetFolder)) {
    mkdir($targetFolder, 0755, true);
}

// 4. Save file with a safe filename
$safeFileName = time() . '_' . preg_replace('/[^a-zA-Z0-9_-]/', '', pathinfo($fileName, PATHINFO_FILENAME)) . '.pdf';
$destinationPath = $targetFolder . $safeFileName;

if (move_uploaded_file($fileTmpPath, $destinationPath)) {
    require_once __DIR__ . '/../config/database.php';
    $pdo = Database::getConnection();

    $publicUrl = "http://localhost:8000/uploads/{$subDirectory}{$safeFileName}";
    $stmt = $pdo->prepare("INSERT INTO articles (title, volume, issue, pdf_url) VALUES (?, ?, ?, ?)");
    $stmt->execute([pathinfo($fileName, PATHINFO_FILENAME), $volume, $issue, $publicUrl]);

    header('Location: ' . $redirect . '?uploaded=1');
    exit;
} else {
    header('Location: ' . $redirect . '?upload_error=Failed to save PDF to folder.');
    exit;
}