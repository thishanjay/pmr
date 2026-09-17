<?php

require_once __DIR__ . '/../config/auth.php';
require_admin();
require_once __DIR__ . '/../config/database.php';

$pdo = Database::getConnection();

$error = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_member'])) {
    verify_csrf();
    $name = trim($_POST['name'] ?? '');
    $role = trim($_POST['role'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $link = trim($_POST['link'] ?? '');
    $category = $_POST['category'] ?? '';
    $validCategories = ['board_member', 'co_editor', 'managing_editor'];

    // Handle Image Upload
    $imageUrl = '/person1.jpg'; // Default fallback image

    if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['photo']['tmp_name'];
        $fileName = $_FILES['photo']['name'];
        $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

        $allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];
        if (in_array($fileExtension, $allowedExtensions, true)) {
            $newFileName = time() . '_' . preg_replace('/[^a-zA-Z0-9_-]/', '', pathinfo($fileName, PATHINFO_FILENAME)) . '.' . $fileExtension;
            $uploadFileDir = __DIR__ . '/../uploads/editorial-board/';

            if (!is_dir($uploadFileDir)) {
                mkdir($uploadFileDir, 0755, true);
            }

            $dest_path = $uploadFileDir . $newFileName;
            if (move_uploaded_file($fileTmpPath, $dest_path)) {
                // Public URL path served to Next.js
                $imageUrl = 'http://localhost:8000/uploads/editorial-board/' . $newFileName;
            }
        } else {
            $error = 'Invalid image format. Only JPG, JPEG, PNG, and WEBP files are allowed.';
        }
    }

    if (!$error) {
        if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || !in_array($category, $validCategories, true)) {
            $error = 'Enter a name, a valid email, and a valid category.';
        } elseif ($link !== '' && $link !== '#' && !filter_var($link, FILTER_VALIDATE_URL)) {
            $error = 'The profile link must be a valid URL or #.';
        } else {
            $stmt = $pdo->prepare('INSERT INTO editorial_board (name, role, email, profile_link, category, image_url) VALUES (?, ?, ?, ?, ?, ?)');
            $stmt->execute([$name, $role, $email, $link, $category, $imageUrl]);
            header('Location: dashboard.php?added=1');
            exit;
        }
    }
}

$members = $pdo->query("SELECT * FROM editorial_board ORDER BY id DESC")->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PMR Editorial Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-5">
    <div class="container bg-white p-4 rounded shadow-sm">
        <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
            <h2>PMR Editorial Board Manager</h2>
            <a href="logout.php" class="btn btn-outline-danger btn-sm">Logout</a>
        </div>

        <?php if (isset($_GET['added'])): ?>
            <div class="alert alert-success">Member added successfully.</div>
        <?php elseif (isset($_GET['uploaded'])): ?>
            <div class="alert alert-success">PDF uploaded successfully.</div>
        <?php elseif (isset($_GET['upload_error'])): ?>
            <div class="alert alert-danger"><?= htmlspecialchars($_GET['upload_error'], ENT_QUOTES, 'UTF-8') ?></div>
        <?php elseif ($error): ?>
            <div class="alert alert-danger"><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></div>
        <?php endif; ?>

        <!-- Add Member Form with Photo Upload -->
        <form method="POST" enctype="multipart/form-data" class="row g-3 mb-5">
            <input type="hidden" name="csrf_token" value="<?= htmlspecialchars(csrf_token(), ENT_QUOTES, 'UTF-8') ?>">
            <h4>Add New Member</h4>
            <div class="col-md-4">
                <label class="form-label font-weight-bold">Full Name</label>
                <input type="text" name="name" class="form-control" placeholder="e.g. Dr. John" required>
            </div>
            <div class="col-md-4">
                <label class="form-label">Email</label>
                <input type="email" name="email" class="form-control" placeholder="Email" required>
            </div>
            <div class="col-md-4">
                <label class="form-label">Category</label>
                <select name="category" class="form-select" required>
                    <option value="board_member">Board Member</option>
                    <option value="co_editor">Co-Editor</option>
                    <option value="managing_editor">Managing Editor</option>
                </select>
            </div>
            <div class="col-md-4">
                <label class="form-label">Role Label (Optional)</label>
                <input type="text" name="role" class="form-control" placeholder="e.g. Co-Editor">
            </div>
            <div class="col-md-4">
                <label class="form-label">Academic Profile Link</label>
                <input type="text" name="link" class="form-control" placeholder="Profile URL (# if none)">
            </div>
            <div class="col-md-4">
                <label class="form-label">Profile Photo (JPG/PNG)</label>
                <input type="file" name="photo" accept="image/*" class="form-control">
            </div>
            <div class="col-12">
                <button type="submit" name="add_member" class="btn btn-primary">Save Member</button>
            </div>
        </form>

        <!-- Upload Journal PDF Form -->
        <h4 class="mt-4">Upload Journal PDF</h4>
        <form method="POST" action="upload-pdf.php" enctype="multipart/form-data" class="row g-3 mb-5">
            <input type="hidden" name="csrf_token" value="<?= htmlspecialchars(csrf_token(), ENT_QUOTES, 'UTF-8') ?>">
            <input type="hidden" name="redirect" value="dashboard.php">
            
            <div class="col-md-3">
                <label class="form-label font-weight-bold">Volume</label>
                <select name="volume" class="form-select" required>
                    <option value="1">Volume 1</option>
                    <option value="2">Volume 2</option>
                    <option value="3">Volume 3</option>
                    <option value="4">Volume 4</option>
                    <option value="5">Volume 5</option>
                    <option value="6">Volume 6</option>
                </select>
            </div>

            <div class="col-md-3">
                <label class="form-label font-weight-bold">Issue</label>
                <select name="issue" class="form-select" required>
                    <option value="1">Issue 1</option>
                    <option value="2">Issue 2</option>
                </select>
            </div>

            <div class="col-md-4">
                <label class="form-label font-weight-bold">Article PDF File</label>
                <input type="file" name="pdf" accept="application/pdf" class="form-control" required>
            </div>

            <div class="col-md-2 d-flex align-items-end">
                <button type="submit" class="btn btn-success w-100">Upload PDF</button>
            </div>
        </form>

        <!-- Current Members List -->
        <h4>Current Members</h4>
        <table class="table table-bordered align-middle">
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($members as $m): ?>
                <tr>
                    <td style="width: 60px;">
                        <img src="<?= htmlspecialchars($m['image_url'] ?? '/person1.jpg', ENT_QUOTES, 'UTF-8') ?>" 
                             alt="Photo" 
                             class="rounded-circle" 
                             style="width: 40px; height: 40px; object-fit: cover;">
                    </td>
                    <td><?= htmlspecialchars($m['name']) ?></td>
                    <td><?= htmlspecialchars($m['email']) ?></td>
                    <td><span class="badge bg-secondary"><?= htmlspecialchars($m['category'], ENT_QUOTES, 'UTF-8') ?></span></td>
                    <td>
                        <form method="POST" action="delete.php" class="d-inline" onsubmit="return confirm('Are you sure?')">
                            <input type="hidden" name="csrf_token" value="<?= htmlspecialchars(csrf_token(), ENT_QUOTES, 'UTF-8') ?>">
                            <input type="hidden" name="id" value="<?= (int) $m['id'] ?>">
                            <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                        </form>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>
</html>