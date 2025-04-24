// importing the readline module to accept user input in and give output 'Node.js'
const readline=require('readline')

// Creating the  interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function secretNumber() {
  // Hoisting
  hoist();
  function hoist() {
    console.log(
      "Function Hoisted to the top of Scope and can be accessed before function Definiton"
    );
  }
  // TDZ
  try {
    console.log(str);
    let str = "TDZ";
  } catch (error) {
    console.log("TDZ Error:", error.message);
  }
  // IIFE ,arrow fun()
  (() => {
    console.log("Welcome to the Secret Number Game!!!");
  })();
  //  clousre to protect secret number
  let sec_num = 7;

  let attempt = 1;
  const max_attempts = 3;
  function guessNum() {
    if (attempt > max_attempts) {
      rl.close();
      return;
    }
    rl.question(
      `Attempt ${attempt}:Guess the secret number between(1-10)\nUser Number:`,
      (UserInput) => {;
        let user_num = Number(UserInput);
        if (sec_num == user_num) {
          console.log("🎉 Correct Number!!");
          rl.close();
          return;
        } else if (user_num < sec_num) {
          console.log("To low!!");
        } else if (user_num > sec_num) {
          console.log("Too high!!");
        }
        attempt++;
        guessNum();
      }
    );
  }
  guessNum();
}
secretNumber();
