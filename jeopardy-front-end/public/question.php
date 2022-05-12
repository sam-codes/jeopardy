<?php

if (!isset($_ENV['GOOGLE_API_KEY']) || $_ENV['GOOGLE_API_KEY'] == '') {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(array('error' => 'Missing Google API Key'));
    exit;
}

require __DIR__ . '/../vendor/autoload.php';

/**
 * Returns an authorized API client.
 * @return Google_Client the authorized client object
 */
function getClient()
{
    $client = new Google_Client();
    $client->setApplicationName('Jeopardy');
    $client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);
    $client->setDeveloperKey($_ENV['GOOGLE_API_KEY']);
    $client->setAccessType('offline');

    return $client;
}


// Get the API client and construct the service object.
$client = getClient();
$service = new Google_Service_Sheets($client);

$question = null;

if (isset($_GET['gameId'])) {
    $spreadsheetId = $_GET['gameId'];
    $range = 'Jeopardy Example!A2:C';
    $response = $service->spreadsheets_values->get($spreadsheetId, $range);
    $values = $response->getValues();
    
    
    
    foreach ($values as $value) {
        if (isset($_GET['value']) && $_GET['category'] &&
            $value[0] == $_GET['value'] && $value[1] == $_GET['category']
        ) {
            $question = $value[2];
            break;
        }
    }
}

// Will want to filter out more than 6 categories or ones that dont have enough questions
$response = array('question' => $question);

header('Content-Type: application/json; charset=utf-8');
echo json_encode($response);

