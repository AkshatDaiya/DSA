function isValid(s) {
  const stack = [];
  const matchingBracket = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
    } else {
      if (s.length === 0 || stack.pop() !== matchingBracket[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("(]"));