import React, { useState } from "react";
import styled from "styled-components";

function NumberSelector() {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState(1);
  console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <div className="numberbox">
      {arrayNumber.map((items, index) => (
        <Box isSelected={items === selectedNumber} key={index} onClick={() => setSelectedNumber(items)}>
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
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
