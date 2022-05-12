import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 0.5rem;
`;
