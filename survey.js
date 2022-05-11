const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {}

rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  answers.answer1 = answer1
  rl.question("What's an activity you like doing?", (answer2) => {
    answers.answer2 = answer2
    rl.question("What do you listen to while doing that?", (answer3) => {
      answers.answer3 = answer3
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        answers.answer4 = answer4
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          answers.answer5 = answer5
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            answers.answer6 = answer6
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              answers.answer7 = answer7
              console.log(`${answers.answer1} loves listening to ${answers.answer3} while ${answers.answer2}, devouring ${answers.answer5} for ${answers.answer4}, prefers ${answers.answer6} over any other sport, and is amazing at ${answers.answer7}.`);

              rl.close();
            })
          })
        })
      })
    })
  })
});


