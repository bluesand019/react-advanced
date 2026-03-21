import { useState, memo, useCallback, useMemo } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.js";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

//memo() is used to memoize(cache) functional components and prevents them
//from re-rendering unless their props have changed.
//-> don't overuse memo(), use it as high up in the component tree as possible
//-> blocking a component execution there ill also block all child component execution

//you could consider removing memo if you use another ConfigureCounter for the counter component

const Counter = memo(function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);
  //useMemo: Use it when you have a function that performs a costly computation, 
  // and you only want that computation to run again if its dependencies change. 
  // This avoids recalculating the result on every render.

  //useCallback: Use it when you are passing a function as a prop to an
  // optimized child component and you want to ensure the child does 
  // not re-render unless the function's dependencies actually change.
  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount],
  );

  const [counter, setCounter] = useState(initialCount);

  const handleDecrement = useCallback(function handleDecrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
});

export default Counter;
