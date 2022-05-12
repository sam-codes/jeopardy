<?php

namespace Sources;

class GoogleSheets
{
    protected string $apiKey;
    protected string $spreadsheetId;
    protected string $sheetId = 'Jeopardy Example';
    protected ?\Google_Client $client;

    public function __construct(string $apiKey, string $spreadsheetId)
    {
        $this->apiKey = $apiKey;
        $this->spreadsheetId = $spreadsheetId;
    }

    /**
     *
     * @return array
     */
    public function getCategories(): array
    {
        $service = new \Google_Service_Sheets($this->getClient());
        $categories = array();

        $range = $this->sheetId . '!B2:B';
        $response = $service->spreadsheets_values->get($this->spreadsheetId, $range);
        $entries = $response->getValues();

        foreach ($entries as $entry) {
            if (!isset($categories[$entry[0]])) {
                $categories[$entry[0]] = 0;
            }

            $categories[$entry[0]] += 1;
        }

        // Will want to filter out more than 6 categories or ones that dont have enough questions
        return array_keys($categories);
    }

    /**
     *
     * @param string $category
     * @param string $value
     * @return string|NULL
     */
    public function getAnswer(string $category, string $value): ?string
    {
        $service = new \Google_Service_Sheets($this->getClient());

        $range = $this->sheetId . '!A2:C';
        $response = $service->spreadsheets_values->get($this->spreadsheetId, $range);
        $entries = $response->getValues();
        $answer = null;

        foreach ($entries as $entry) {
            if ($entry[0] == $value && $entry[1] == $category) {
                $answer = $entry[2];
                break;
            }
        }

        return $answer;
    }

    /**
     * Returns an authorized API client.
     * @return \Google_Client the authorized client object
     */
    protected function getClient(): \Google_Client
    {
        if (!isset($this->client)) {
            $this->client = new \Google_Client();
            $this->client->setApplicationName('Jeopardy');
            $this->client->setScopes(\Google_Service_Sheets::SPREADSHEETS_READONLY);
            $this->client->setDeveloperKey($this->apiKey);
            $this->client->setAccessType('offline');
        }

        return $this->client;
    }
}