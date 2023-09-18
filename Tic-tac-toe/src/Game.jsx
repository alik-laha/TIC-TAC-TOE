import React from "react";
import Box from "./Box";
import { useState } from "react";

let Game = () => {
  const [count, setCount] = useState(Array(9).fill(null));

  const [xtern, setXtern] = useState(true);

  const handleClick = (index) => {
    const copystate = [...count];

    copystate[index] = xtern ? "x" : "0";

    setCount(copystate);

    setXtern(!xtern);
  };
  const checkWinner = () => {
    const winPosibleon = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    for (let chance of winPosibleon) {
      const [a, b, c] = chance;

      if (count[a] !== null && count[a] === count[b] && count[a] === count[c]) {
        if (xtern === true) {
          console.log("winner is 0");
        } else {
          console.log("winner is X");
        }
        return true;
      }
    }
  };
  const isWinner = checkWinner();

  if (isWinner) {
    setCount(Array(9).fill(null));
  }

  return (
    <>
      <div className="container">
        <h1 className="now">Now turn {xtern ? "x" : "0"}</h1>
        <div className="board">
          <div className="row">
            <Box value={count[0]} onclick={() => handleClick(0)} />
            <Box value={count[1]} onclick={() => handleClick(1)} />
            <Box value={count[2]} onclick={() => handleClick(2)} />
          </div>
          <div className="row">
            <Box value={count[3]} onclick={() => handleClick(3)} />
            <Box value={count[4]} onclick={() => handleClick(4)} />
            <Box value={count[5]} onclick={() => handleClick(5)} />
          </div>
          <div className="row">
            <Box value={count[6]} onclick={() => handleClick(6)} />
            <Box value={count[7]} onclick={() => handleClick(7)} />
            <Box value={count[8]} onclick={() => handleClick(8)} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Game;
