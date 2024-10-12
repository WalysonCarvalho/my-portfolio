import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  gap: 2rem;
  font-family: "Roboto Slab", serif;

  background: ${({ $isNight }) => ($isNight ? "#05003c" : "white")};
  color: ${({ $isNight }) => ($isNight ? "white" : "black")};

  a {
    padding: 1rem;
    border: 1px solid #666;
    text-decoration: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: ${({ $isNight }) => ($isNight ? "white" : "black")}; 
    background-color: ${({ $isNight }) => ($isNight ? "#05003a" : "transparent")}; 
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ $isNight }) => ($isNight ? "#5a4e9a" : "#666")}; // 
    }
  }
`;
