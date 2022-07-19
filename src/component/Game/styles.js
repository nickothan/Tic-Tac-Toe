import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  padding: 20px;
  width: 80%;
  background-color: #ffffcc;
  box-shadow: 0 0 5px 2px yellow;
  border-radius: 8px;

  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 678px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const GameInfo = styled.div`
  margin-right: 20px;
  background: royalblue;
  border-radius: 4px;
  width: 210px;

  @media screen and (max-width: 678px) {
    margin-right: 0px;
    margin-top: 20px;
  }

  ul {
    margin: auto;
    padding: 10px;
    display: grid;
    justify-content: center;
    list-style: none;

    li {
      display: grid;
      justify-content: center;
    }
  }
`;

export const Turno = styled.div`
  padding: 10px;
  background-color: ${({ status }) => (status ? "red" : "blue")};
  color: white;
  border-radius: 4px;
  font-size: 18px;
  transition: 0.6s all ease-in-out;
`;

export const BtnHistorico = styled.button`
  margin-bottom: 5px;
  cursor: pointer;
  padding: 5px 20px;
  background-color: royalblue;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    padding: 5px 20px;
    background-color: blue;
    color: white;
    border: 1px solid white;
  }
`
