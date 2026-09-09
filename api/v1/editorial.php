<?php

require_once __DIR__ . '/../config/database.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    header('Allow: GET, OPTIONS');
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$response = ['co_editors' => [], 'managing_editor' => null, 'board_members' => []];
try {
    $pdo = Database::getConnection();
        $stmt = $pdo->query("SELECT id, name, role, email, profile_link AS link, image_url AS image, category FROM editorial_board ORDER BY display_order ASC, id ASC");
        $members = $stmt->fetchAll();

        $response = [
            "co_editors" => array_values(array_filter($members, fn($m) => $m['category'] === 'co_editor')),
            "managing_editor" => array_values(array_filter($members, fn($m) => $m['category'] === 'managing_editor'))[0] ?? null,
            "board_members" => array_values(array_filter($members, fn($m) => $m['category'] === 'board_member'))
        ];

        http_response_code(200);
        echo json_encode(["success" => true, "data" => $response]);
} catch (Throwable $e) {
    error_log($e->getMessage());
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Unable to load the editorial board."]);
}