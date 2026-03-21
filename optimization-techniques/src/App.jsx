import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
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
