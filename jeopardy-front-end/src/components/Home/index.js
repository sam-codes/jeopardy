import React from "react";
import SpreadsheetForm from "../SpreadsheetForm";
import { Container } from "./Home.styled";

const Home = (changeGameId) => (
  <Container>
    <SpreadsheetForm changeGameId={changeGameId} />
  </Container>
);

export default Home;
