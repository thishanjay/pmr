<?php

define('DB_HOST', getenv('PMR_DB_HOST') ?: '127.0.0.1');
define('DB_NAME', getenv('PMR_DB_NAME') ?: 'pmr_db');
define('DB_USER', getenv('PMR_DB_USER') ?: 'root');
define('DB_PASS', getenv('PMR_DB_PASS') ?: 'CareBridge@1234');

class Database {
    private static $pdo = null;

    public static function getConnection() {
        if (self::$pdo === null) {
            try {
                self::$pdo = new PDO(
                    "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
                    DB_USER,
                    DB_PASS,
                    [
                        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                        PDO::ATTR_EMULATE_PREPARES => false
                    ]
                );
            } catch (PDOException $e) {
                error_log($e->getMessage());
                throw new RuntimeException('Database connection failed.', 0, $e);
            }
        }
        return self::$pdo;
    }
}
?>