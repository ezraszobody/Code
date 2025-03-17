<!DOCTYPE html>
<?php
session_start()
$posts = $_SESSION['posts'] ?? []
?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Texting...</title>
</head>
<body>
    <h1>Let's do some texting!</h1>
    <h2>Messages</h2>
<?php if (!empty($posts)): ?>
    <?php foreach ($posts as $post): ?>
        <div>
            <img src="<?php echo $post['profile_pic']; ?>" alt="Profile Picture" width="50">
            <strong><?php echo htmlspecialchars($post['username']); ?></strong>
            <p><?php echo htmlspecialchars($post['message']); ?></p>
            <small><?php echo $post['timestamp']; ?></small>
        </div>
        <hr>
    <?php endforeach; ?>
<?php else: ?>
    <p>No messages yet. Be the first to post!</p>
<?php endif; ?>
<form action="process.php" method="POST" enctype="multipart/form-data">
<label for="usernme">Username</label>
<input type="text" id="username" name="username" required>
<br>
<label for="profile_pic">Profile Picture</label>
<input type="file" id="profile-pic" name="profile_pic" accept="image/*" required>
<br>
<label for="mesage">Message:</label>
<textarea name="message" id="message" rows="4" cols="50" required></textarea>
<br>
<button type="submit">Post Message</button>
</form>

</body>
</html>