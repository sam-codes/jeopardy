import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const Title = styled.h3`
  color: black;
  margin-bottom: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: gray;
  padding: 48px;
  width: 100%;
`;

export const SpreadsheetLabel = styled.label`
  color: black;
  text-align: left;
  font-size: 2rem;
`;

export const SpreadsheetInput = styled.input`
  border: none;
  background-color: white;
  margin: 24px 0;
  font-size: 1.5rem;
  padding: 12px;
`;

export const SpreadsheetButton = styled.button`
  border: none;
  background-color: #010c93;
  color: white;
  font-size: 1.5rem;
  padding: 12px;
  width: fit-content;
  font-weight: 700;
`;
