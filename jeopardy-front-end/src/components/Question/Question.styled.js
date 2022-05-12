import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: #010c93;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  text-align: center;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 1);
  font-size: 4em;
  color: #fff;
  text-transform: uppercase;
  padding: 24rem;
`;
