'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0; // Variable to store the sum of numbers

  // This is the adder function that will handle chaining
  function adder(number) {
    if (number === undefined) {
      // If no argument is passed, return the sum and reset it
      const result = sum;

      sum = 0; // Reset sum after returning it

      return result;
    } else {
      // If a number is passed,
      // add it to the sum and return the adder for chaining
      sum += number;

      return adder; // Return the function itself for chaining
    }
  }

  return adder; // Return the adder function
}

module.exports = makeInfinityAdder;
