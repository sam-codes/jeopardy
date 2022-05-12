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
} else if (!isset($_GET['category']) || $_GET['category'] == '') {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(array('error' => 'Missing category parameter'));
    exit;
} else if (!isset($_GET['value']) || $_GET['value'] == '') {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(array('error' => 'Missing value parameter'));
    exit;
}

$source = new Sources\GoogleSheets($_ENV['GOOGLE_API_KEY'], $_GET['gameId']);
$response = array('answer' => $source->getAnswer($_GET['category'], $_GET['value']));

header('Content-Type: application/json; charset=utf-8');
echo json_encode($response);

