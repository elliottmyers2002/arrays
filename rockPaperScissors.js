function playRockPaperScissors(userInput){
    let choices = [
        "rock", "paper", "scissors"
    ]
    let randomNum = Math.floor(Math.random()*choices.length);
    const compChoice = choices[randomNum];
    const potentialOutcomes = [
        {user: "rock", comp: "rock", res: "tie"},
        {user: "rock", comp: "paper", res: "lose"},
        {user: "rock", comp: "scissors", res: "win"},
        {user: "paper", comp: "rock", res: "win"},
        {user: "paper", comp: "paper", res: "tie"},
        {user: "paper", comp: "scissors", res: "lose"},
        {user: "scissors", comp: "rock", res: "lose"},
        {user: "scissors", comp: "paper", res: "win"},
        {user: "scissors", comp: "scissors", res: "tie"}   
    ]
    let r = "";
    potentialOutcomes.forEach(function(outcome){
        if (outcome.user === userInput && outcome.comp === compChoice){
            r = `user picks ${userInput} and the computer picks ${compChoice}, you ${outcome.res}`
        }
    });
    return r;
};


const result = playRockPaperScissors("rock");
console.log(result);