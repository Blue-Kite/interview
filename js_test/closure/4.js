var createCounter = function (init) {
  let value = init;
  function increment() {
    return (value += 1);
  }
  function decrement() {
    return (value -= 1);
  }
  function reset() {
    return (value = init);
  }
  return {
    increment,
    decrement,
    reset,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
