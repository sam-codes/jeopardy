<?php

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../src/Sources/GoogleSheets.php';

if (!isset($_ENV['GOOGLE_API_KEY']) || $_ENV['GOOGLE_API_KEY'] == '') {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(array('error' => 'Missing Google API Key'));
    exit;
} else if (!isset($_GET['gameId']) || $_GET['gameId'] == '') {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(array('error' => 'Missing gameId parameter'));
    exit;
}

$source = new Sources\GoogleSheets($_ENV['GOOGLE_API_KEY'], $_GET['gameId']);
$response = array('categories' => $source->getCategories());

header('Content-Type: application/json; charset=utf-8');
echo json_encode($response);

