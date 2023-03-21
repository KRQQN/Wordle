export default function checkGuess(guess, word) {
  if (word.length === guess.length) {
    const correctChars = word.toUpperCase().split("");
    const guessChars = guess.toUpperCase().split("");
    const result = [];

    // create array of letters that isnt correct placed
    const notMatched = correctChars.filter((e, i) => e != guessChars[i]);
    //foreach char in the correct word check if it matches eachothers indexes
    correctChars.forEach((char, i) => {
      // if it matches, push the object to result with properties with the correct values 
      if (char === guessChars[i]) {
        result.push({
          Letter: guessChars[i],
          Result: "correct",
        });
      // otherwise, push the same-structure object to result,
      // but "Result:" is based on if char has other char-instances matching in the word  
      } else {
        result.push({
          Letter: guessChars[i],
          Result: notMatched.includes(guessChars[i])
            ? "misplaced"
            : "incorrect",
        });
      }
    });
    return result;
  } else return "Fel antal bokstäver";
}
