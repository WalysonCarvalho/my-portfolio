import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;

  background: ${({ $isNight }) => ($isNight ? "#05003c" : "white")};
  color: ${({ $isNight }) => ($isNight ? "white" : "black")};
  font-family: "Roboto", serif;
  font-size: 1rem;
  text-align: center;

  > a {
    max-width: 17rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #666;
    color: gray;

    border-radius: 10px;
    text-decoration: none;
    margin: 1rem 0 1rem 0;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: ${({ $isNight }) => ($isNight ? "#5a4e9a" : "#666")}; //
    }

    > h1 {
      color: ${({ $isNight }) => ($isNight ? "white" : "black")};
    }
  }

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    color: gray;
    margin: 1rem;

    > a {
      display: flex;
      margin-left: 0.5rem;
    }
  }

  > img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }
`;
