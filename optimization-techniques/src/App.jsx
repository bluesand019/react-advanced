import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    // react handles states as batches, so two state update function below
    // won't re-render the component twice. It will re-render the compoenent
    // once. That's why if we want to update the current state value, we need
    // to use updater function!
    
    setChosenCount(newCount);
    setChosenCount(prevChosenCount => prevChosenCount + 1);
    // console.log(chosenCount); //this won't print the current state value, rather the previous state value
  }
  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        {/* key can be used in any component.
        Changing a component's key can force React to completely
         unmount the old instance and mount a new one with fresh state. */}
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
