import React from "react";
import PropTypes from "prop-types";
import { Container, Image } from "./DailyDouble.styled";
import dailyDouble from "./dailydouble.png";

export const DailyDouble = ({ onClose }) => {
  return (
    <Container onClick={onClose}>
      <Image src={dailyDouble} alt="daily double" />
    </Container>
  );
};

DailyDouble.propTypes = {
  onClose: PropTypes.func,
};
