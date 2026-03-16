import { useState, useRef } from "react";

//state causes components to re-execute and therefore should be used for values that are directly reflected to the UI
//ref does not cause component re-execution when changed, can be used to access direct DOM -> great for reading values

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   setSubmitted(false);
  //   setEnteredPlayerName(e.target.value);
  // };
  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ''; //caution: don't manipulate dom directly like this everywhere
  };

  return (
    <section id="player">
      <h2>
        {enteredPlayerName ? `Welcome ${enteredPlayerName}` : `Welcome unknown entity`}
      </h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
