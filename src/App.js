import React from "react";
import Die from "./components/Die";
import "./App.scss";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  return (
    <main className="main">
      <div className="dice-container">{diceElements}</div>
    </main>
  );
}

export default App;
