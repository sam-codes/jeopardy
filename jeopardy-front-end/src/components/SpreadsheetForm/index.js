import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  SpreadsheetInput,
  SpreadsheetLabel,
  SpreadsheetButton,
  Form,
  Title,
} from "./Spreadsheet.styled";

const SpreadsheetForm = () => {
  let navigate = useNavigate();
  const [spreadsheetUrl, setSpreadsheetUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Send the spreadsheet url (${spreadsheetUrl})`);
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
