const collectAnswers = require("./lib/collect-answers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with your knowledge? "
];

const answerEvents = collectAnswers(questions, answers => {
    console.log("Thank you!");
    console.log(answers);
    process.exit();
});

// answerEvents.on("answer", answer =>
//     console.log(`question answered: ${answer}`)
// );

answerEvents.on("complete", answers => {
    console.log("Well done! Thank you!");
    console.log(answers);
})

answerEvents.on("complete", () => process.exit());