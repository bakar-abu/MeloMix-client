import React from "react";
import styled, { keyframes } from "styled-components";

// Generate random number between min and max
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Define keyframes for random movement
const randomMovement = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(${getRandomInt(-10, 10)}px, ${getRandomInt(
  -10,
  10
)}px);
  }
`;

// Styled component for animated line
const Line = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: #ffffff; // Adjust as needed
  animation: ${randomMovement} 3s infinite alternate;
`;

export const Layout = ({ children }) => {
  return <div className="w-[100%] ">{children}</div>;
};
