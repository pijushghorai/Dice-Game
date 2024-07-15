import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [currentDice, setCurrenntDice] = useState(1);
  const [error, setErorr] = useState("");
  const [showRules, setShowRules] = useState(false)

  const genarateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const onRoleDice = () => {
    if (!selectedNumber) {
      setErorr("You have not selected any number");
      return;
    }
    setErorr("");
    const randomNumber = genarateRandomNumber(1, 7);
    setCurrenntDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };


  const resetScore = () => {
    setScore(0)
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setErorr}
        />
      </div>
      <RoleDice currentDice={currentDice} onRoleDice={onRoleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    align-items: center;
    margin-top: 30px;
  }
`;
