// Step 1: Assign initial weights to inputs
let weekend = 1;
let time = 1;
let raining = 1;
let distance = 1;

// Step 2: Estimate minutes for a milk run
let estimate = function(input1, input2, input3, input4) {
  return (weekend * input1) + (time * input2) + (raining * input3) + (distance * input4);
}

// Step 3: Guess new weights
let guessWeights = function() {
  weekend = Math.random();
  time = Math.random();
  raining = Math.random();
  distance = Math.random();
}

// Step 4: Rerun calculations
let rerunCalculations = function(inputs) {
  let result = estimate(inputs[0], inputs[1], inputs[2], inputs[3]);
  return result;
}

// Step 5: Repeat steps 3 and 4 until estimates aren't getting better
let inputs = [17, 15, 10, 21]; // Example inputs for calculation
let previousEstimate = Number.MAX_SAFE_INTEGER; // Initial high value
let currentEstimate = rerunCalculations(inputs);

while (currentEstimate < previousEstimate) {
  previousEstimate = currentEstimate;
  guessWeights();
  currentEstimate = rerunCalculations(inputs);
}

console.log("Final estimates:", currentEstimate);
console.log("Final weights:", weekend, time, raining, distance);