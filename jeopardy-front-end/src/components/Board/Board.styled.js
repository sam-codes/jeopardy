import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, calc((100vw - (5px * 5)) / 6));
  grid-auto-rows: minmax(calc((100vh - (5px * 5)) / 6), auto);
  grid-gap: 5px;
`;
