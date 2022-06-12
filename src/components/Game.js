import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

// components
import Die from "./Die";

export default function Game() {
  const [dices, setDices] = useState(generateNewDices());
  const [win, setWin] = useState(false);

  useEffect(() => {
    const isAllDicesHeld = dices.every((die) => die.isHeld);
    const isSameValue = dices.every((die) => die.value === dices[0].value);

    if (isAllDicesHeld && isSameValue) {
      setWin(true);
    }
  }, [dices]);

  // generate a whole new array of dices objects
  function generateNewDices() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        id: nanoid(),
        value: randomValue(6),
        isHeld: false,
      });
    }

    return arr;
  }

  // generate a new dice object
  function generateDice() {
    return {
      id: nanoid(),
      value: randomValue(6),
      isHeld: false,
    };
  }

  // get random value between 1 and 6 (both included)
  function randomValue(max) {
    return Math.ceil(Math.random() * max);
  }

  // roll button click function handler
  function rollDices() {
    if (win) {
      setWin(false);
      setDices(generateNewDices());
    } else {
      setDices((oldDices) => {
        return oldDices.map((die) => {
          return die.isHeld ? die : generateDice();
        });
      });
    }
  }

  // dice click function handler
  function heldDice(id) {
    setDices((oldDices) => {
      return oldDices.map((item) => {
        return item.id === id
          ? {
              ...item,
              isHeld: !item.isHeld,
            }
          : item;
      });
    });
  }

  const diceElements = dices.map((item) => (
    <Die
      value={item.value}
      key={item.id}
      heldDice={(id) => heldDice(item.id)}
      isHeld={item.isHeld}
    />
  ));

  return (
    <div className="game-board">
      {win && <Confetti />}
      <h1>Tenzies</h1>
      <p className="game-board__para">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="game-board__dices">{diceElements}</div>
      <button className="game-board__btn" onClick={rollDices}>
        {win ? "Reset" : "Roll"}
      </button>
    </div>
  );
}
