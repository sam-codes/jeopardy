import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setSpreadsheet } from "../API";
import {
  Container,
  SpreadsheetInput,
  SpreadsheetLabel,
  SpreadsheetButton,
  Form,
  Title,
} from "./Spreadsheet.styled";

const SpreadsheetForm = (changeGameId) => {
  let navigate = useNavigate();
  const [spreadsheetUrl, setSpreadsheetUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    var ret = "data-123".replace("data-", "");
    setSpreadsheet(spreadsheetUrl).then((data) => changeGameId(data));
    navigate("/board");
  };

  return (
    <Container>
      <Title>Enter in your spreadsheet</Title>
      <Form onSubmit={handleSubmit}>
        <SpreadsheetLabel>Spreadsheet Link</SpreadsheetLabel>
        <SpreadsheetInput
          value={spreadsheetUrl}
          onChange={(e) => setSpreadsheetUrl(e.target.value)}
        />
        <SpreadsheetButton>Build your board</SpreadsheetButton>
      </Form>
    </Container>
  );
};

export default SpreadsheetForm;
