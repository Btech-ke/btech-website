<?php
header('Content-Type: application/json');

$filename = '../admin/kra-log.txt'; // or wherever your logs are stored
if (!file_exists($filename)) {
    echo json_encode([]);
    exit;
}

$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$results = [];

foreach ($lines as $line) {
    $parts = explode('|', $line); // Assuming fields are pipe-separated
    $results[] = [
        "full_name" => $parts[0] ?? '',
        "email" => $parts[1] ?? '',
        "phone" => $parts[2] ?? '',
        "kra_pin" => $parts[3] ?? '',
        "id_number" => $parts[4] ?? '',
        "notes" => $parts[5] ?? '',
        "date" => $parts[6] ?? ''
    ];
}

echo json_encode($results);
