import React from "react";
import styled from "styled-components";

function StartGame({toggleGamePlay}) {
  return (
    <Container>
      <div>
        <img src="./src/assets/dices.png" alt="dices.png" />
      </div>
      <div className="content">
        <h1>dice game</h1>
        <Button onClick={toggleGamePlay}>Play Now</Button>
      </div>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h1 {
      font-size: 96px;
      text-transform: uppercase;
    }
  }
`;

const Button = styled.button`
  padding: 10px 18px;
  background-color: #000000;
  border-radius: 5px;
  color: #ffffff;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.2s ease;

  &:hover {
    background-color: #ffffff;
    border: 1px solid black;
    color: #000000;
  }
`;
