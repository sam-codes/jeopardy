import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Container,
  SpreadsheetInput,
  SpreadsheetLabel,
  SpreadsheetButton,
  Form,
  Title,
} from "./Spreadsheet.styled";

const SpreadsheetForm = ({ changeGameId }) => {
  let navigate = useNavigate();
  const [spreadsheetUrl, setSpreadsheetUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    changeGameId(/^.*spreadsheets\/d\/(.*?)\/.*$/i.exec(spreadsheetUrl)[1]);
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

SpreadsheetForm.propTypes = {
  changeGameId: PropTypes.func,
};

export default SpreadsheetForm;
