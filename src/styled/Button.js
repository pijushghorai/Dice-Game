import styled from "styled-components";

export const Button = styled.button`
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
    color: #000000;
    border: 1px solid black;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid black;
  &:hover {
    background-color: #000000;
    color: #ffffff;
    border: 1px solid transparent;
  }
`;
