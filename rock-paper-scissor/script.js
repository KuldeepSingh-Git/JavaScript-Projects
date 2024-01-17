/* This JavaScript code sets up a simple rock-paper-scissors game. */
const useropt = document.getElementById('player-choice');
const compopt = document.getElementById('computer-choice');
const message = document.getElementById('result-message');
const opts= ['rock','paper','scissor'];

/*
 * This function takes user input, generates a random choice for the computer, displays the choices, and determines the outcome of the game.
 * userinput - The user's choice in the game (rock, paper, or scissor).
 */
const showresult = (userinput) =>
{
    let compchoose = opts[Math.floor(Math.random()*opts.length)];

    useropt.src = `images/${userinput}.png`;
    useropt.alt = userinput

    compopt.src = `images/${compchoose}.png`;
    compopt.alt = compchoose

    if(userinput == compchoose)
        message.innerText = 'This game is DRAW';

    else if ( (userinput =='rock' && compchoose == 'scissor') || (userinput == 'paper' && compchoose == 'rock') || (userinput == 'scissor' && compchoose == 'paper'))
        message.innerText = 'You WIN the game';

    else
        message.innerText = 'You LOSE the game';
}