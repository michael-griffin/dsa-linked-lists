const Queue = require("../queue");
const Stack = require("../stack");


/** Reverse string without using an array. */
function stringReversal(str) {
  const stack = new Stack();

  for (const letter of str) {
    stack.push(letter);
  }

  let reversedStr = "";

  while (stack.isEmpty() === false) {
    reversedStr = reversedStr.concat(stack.pop());
  }

  return reversedStr;
}

/**  */
function balancedBrackets1(str) {
  const stack = new Stack();
  const openBrackets = "({[";
  const closeBrackets = ")}]";


  for (const char of str) {
    if (openBrackets.includes(char)) stack.push(char);

    if (closeBrackets.includes(char)) {
      if (!stack.isEmpty()) top = stack.peek();
      else return false;

      if (char === ")" && top === "(") stack.pop();
      else if (char === "}" && top === "{") stack.pop();
      else if (char === "]" && top === "[") stack.pop();
      else return false;
    }
  }

  return stack.isEmpty();
}

function balancedBrackets(str) {
  const stack = new Stack();
  const openBrackets = "({[";
  const closeBrackets = ")}]";

  for (const char of str) {

    if (openBrackets.includes(char)) {
      if (char === "(") stack.push(")");
      else if (char === "{") stack.push("}");
      else if (char === "[") stack.push("]");
    }

    if (closeBrackets.includes(char)) {
      if (!stack.isEmpty()) top = stack.peek();
      else return false;

      if (top === char) stack.pop();
    }
  }

  return stack.isEmpty();
}




function josephusSurvivor(peopleNum, skip) {
}

function calculator(input) {
}

module.exports = {
  calculator,
  josephusSurvivor,
  balancedBrackets,
  stringReversal,
};
