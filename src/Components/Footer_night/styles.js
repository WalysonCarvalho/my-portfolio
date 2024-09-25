import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 0 3rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  gap: 2rem;

  background: ${({ $isNight }) => ($isNight ? "#05003c" : "white")};

  text-decoration: none;

  > a {
    color: ${({ $isNight }) => ($isNight ? "white" : "black")};

    
  }
`;
