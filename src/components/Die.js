import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "",
  };

  return (
    <div className="game-board__die" style={styles} onClick={props.heldDice}>
      <span>{props.value}</span>
    </div>
  );
}
