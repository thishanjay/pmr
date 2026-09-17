<?php

require_once __DIR__ . '/../config/database.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: GET, OPTIONS');

// Preflight CORS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Restrict to GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    header('Allow: GET, OPTIONS');
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

try {
    $pdo = Database::getConnection();

    // Query members
    $stmt = $pdo->query("SELECT id, name, role, email, profile_link AS link, image_url AS image_url, category FROM editorial_board ORDER BY id ASC");
    $members = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Format relative image paths to full HTTP URLs for Next.js
    $formattedMembers = array_map(function ($m) {
        if (!empty($m['image_url']) && !preg_match('~^https?://~i', $m['image_url'])) {
            $m['image_url'] = 'http://localhost:8000/' . ltrim($m['image_url'], '/');
        }
        return $m;
    }, $members);

    $response = [
        "co_editors" => array_values(array_filter($formattedMembers, fn($m) => $m['category'] === 'co_editor')),
        "managing_editor" => array_values(array_filter($formattedMembers, fn($m) => $m['category'] === 'managing_editor'))[0] ?? null,
        "board_members" => array_values(array_filter($formattedMembers, fn($m) => $m['category'] === 'board_member'))
    ];

    http_response_code(200);
    echo json_encode(["success" => true, "data" => $response]);
} catch (Throwable $e) {
    error_log($e->getMessage());
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Unable to load the editorial board."]);
}