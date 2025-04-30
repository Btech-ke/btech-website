<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>KRA Submissions - Admin Panel</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #f4f6f9;
      padding: 40px;
      margin: 0;
    }

    h1 {
      color: #007BFF;
      text-align: center;
      margin-bottom: 30px;
    }

    .log-container {
      background: #fff;
      padding: 25px;
      max-width: 900px;
      margin: auto;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      white-space: pre-wrap;
      overflow-y: auto;
      max-height: 600px;
      font-size: 16px;
    }

    .log-container strong {
      color: #444;
    }

    .refresh-btn {
      display: block;
      margin: 20px auto;
      padding: 10px 18px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      text-align: center;
    }

    .refresh-btn:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

  <h1>KRA Form Submissions</h1>

  <div class="log-container">
    <?php
      $file = "kra-submissions.txt";
      if (file_exists($file)) {
          $content = file_get_contents($file);
          echo nl2br(htmlspecialchars($content));
      } else {
          echo "No submissions found.";
      }
    ?>
  </div>

  <form method="GET">
    <button class="refresh-btn" type="submit">🔄 Refresh</button>
  </form>

</body>
</html>
