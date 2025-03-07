/*
  You should be able to call this function with no arguments and see its output in the terminal:
  greetProgrammer();
  => "Hello, programmer!"
*/
function greetProgrammer() {
  console.log("Hello, programmer!");
}

/*
  You should be able to call this function with one argument and see its output in the terminal:
  greet("Naureen");
  => "Hello, Naureen!"
*/
// Function to greet a specific person
function greet(name) {
  // Ensure name is a valid string
  if (typeof name !== "string" || name.trim() === "") {
    console.error("Please provide a valid name.");
    return;
  }
  console.log(`Hello, ${name}!`);
}

/*
  You should be able to call this function with no arguments and see its output in the terminal:
  greetWithDefault();
  => "Hello, programmer!"

  You should also be able to call this function with one argument and see its output in the terminal:
  greetWithDefault("Sunny");
  => "Hello, Sunny!"
*/
function greetWithDefault(name = "programmer") {
  // Ensure name is a valid string
  if (typeof name !== "string" || name.trim() === "") {
    console.error("Please provide a valid name.");
    return;
  }
  console.log(`Hello, ${name}!`);
}

/*
  You should be able to call this function with two arguments and get back its return value:
  const sum = add(1, 2);
  console.log(sum);
  => 3
*/
// Function to add two numbers and return the result
function add(num1, num2) {
  // Ensure both inputs are numbers
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.error("Both arguments must be numbers.");
    return null;
  }
  return num1 + num2;
}
/*
  You should be able to call this function with two arguments and get back its return value:
  const result = halve(4);
  console.log(result);
  => 2

  If the function is called with an argument that isn't a number, it should return null:
  const result = halve("two")
  => null
*/
// Function to halve a number, with input validation
function halve(number) {
  // Check if the input is a valid number
  if (typeof number !== "number" || isNaN(number)) {
    console.error("Input must be a valid number.");
    return null;
  }
  return number / 2;
}
