import styled from "styled-components";

export const Button = styled.button`
display: flex;
align-self: center;
justify-content: center;

background: ${({ isNight }) => (isNight ? "#0b0065" : "white")};

`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 35rem;
  margin: 0 auto;
  
  background: ${({ isNight }) => (isNight ? "#0b0065" : "white")};
  
  color: ${({ isNight }) => (isNight ? "white" : "black")};
`;


