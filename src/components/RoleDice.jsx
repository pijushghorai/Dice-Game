import React, { useState } from "react";
import styled from "styled-components";

function RoleDice({ currentDice, onRoleDice }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={onRoleDice}>
        <img src={`./src/assets/dice_${currentDice}.png`} alt="dice_1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
