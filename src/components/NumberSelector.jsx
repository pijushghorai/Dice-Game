import React, { useState } from "react";
import styled from "styled-components";

function NumberSelector({selectedNumber, setSelectedNumber, error, setError}) {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandelar = (items) => {
    setSelectedNumber(items)
    setError("")
  }
  
  console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p className="error_msg">{error}</p>
      <div className="numberbox">
      {arrayNumber.map((items, index) => (
        <Box isSelected={items === selectedNumber} key={index} onClick={() => numberSelectorHandelar(items)}>
          {items}
        </Box>
      ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
.error_msg{
  color: #d60000;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
}
    .numberbox {
        display: flex;
        gap: 20px;
    }
    p {
        font-size: 24px;
        font-weight: 700;
        text-align: right;
        padding-top: 8px;
    }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
