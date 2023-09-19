import React from "react";
import Box from "./Box";
import { useState } from "react";

let Game = () => {
  const [count, setCount] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState("");
  const [xtern, setXtern] = useState(true);
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);

  const handleClick = (index) => {
    const copystate = [...count];

    if (xtern && copystate[index] === null) {
      copystate[index] = "X";
    } else if (copystate[index] === null && !xtern) {
      copystate[index] = "0";
    }

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
          setWinner("0");
          setP2(p2 + 1);
        } else {
          setWinner("X");
          setP1(p1 + 1);
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
        <div className="now">
          <h1 className="winner">previus game winner is {winner}</h1>
          <h1 className="turn">Now turn {xtern ? "x" : "0"}</h1>
        </div>
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
        <div className="point">
          <div className="p1">
            <p>p1</p>
            <p className="score">{p1}</p>
          </div>
          <div className="p2">
            <p>p2</p>
            <p className="score">{p2}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Game;
