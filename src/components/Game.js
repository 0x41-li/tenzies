import React from "react";

// components
import Die from "./Die";

export default function Game() {
  const dicesValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const dices = dicesValues.map((val) => <Die value={val} />);

  return (
    <div className="game-board">
      <h1>Tenzies</h1>
      <p className="game-board__para">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="game-board__dices">
        {dices}
      </div>
      <button className="game-board__btn">Roll</button>
    </div>
  );
}
