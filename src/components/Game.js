import React, { useState } from "react";
import { nanoid } from "nanoid";

// components
import Die from "./Die";

export default function Game() {
  const [dices, setDices] = useState(generateAllNewDices());

  function generateAllNewDices() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        id: nanoid(),
        value: Math.round(Math.random() * 6),
      });
    }

    return arr;
  }

  const diceElements = dices.map((item) => (
    <Die value={item.value} key={item.id} />
  ));

  return (
    <div className="game-board">
      <h1>Tenzies</h1>
      <p className="game-board__para">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="game-board__dices">{diceElements}</div>
      <button className="game-board__btn">Roll</button>
    </div>
  );
}
