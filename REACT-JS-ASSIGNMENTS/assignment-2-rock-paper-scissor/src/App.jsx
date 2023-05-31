import { useState } from "react";
import './App.css';
const choices = ["rock", "paper", "scissors"];

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleUserChoice = (choice) => {
    const chosenIndex = choices.indexOf(choice);
    const computerIndex = Math.floor(Math.random() * choices.length);

    setUserChoice(chosenIndex);
    setComputerChoice(computerIndex);

    if (chosenIndex === computerIndex) {
      setResult("It's a tie!");
    } else if ((chosenIndex + 1) % choices.length === computerIndex) {
      setResult("You lose!");
    } else {
      setResult("You win!");
    }
  };
  return (
    <div className="container">
      <div className="game">
        <h1>Rock Paper Scissors</h1>
        <p>Make your choice:</p>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice}
          </button>
        ))}
        {result && (
          <>
            <p>You chose: {choices[userChoice]}</p>
            <p>The computer chose: {choices[computerChoice]}</p>
            <p>{result}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
