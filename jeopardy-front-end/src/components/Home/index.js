import React from "react";
import PropTypes from "prop-types";
import SpreadsheetForm from "../SpreadsheetForm";
import { Container } from "./Home.styled";

const Home = ({ changeGameId }) => (
  <Container>
    <SpreadsheetForm changeGameId={changeGameId} />
  </Container>
);

Home.propTypes = {
  changeGameId: PropTypes.func,
};

export default Home;
