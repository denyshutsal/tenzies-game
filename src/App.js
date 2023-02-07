import React from "react";
import Die from "./components/Die";
import "./App.scss";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} />
  ));

  return (
    <main className="main">
      <div className="dice-container main__dice">{diceElements}</div>
      <button className="roll" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
