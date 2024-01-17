/* This code is implementing a simple stopwatch functionality using JavaScript. */
let hrs = 0;
let mins = 0;
let sec = 0;
let timer = true;
let count = 0;
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let intervalId;

let startBtn = document.getElementById('start-btn');
let pausetBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');

/* This code is adding an event listener to the `startBtn` element. When the `startBtn` is clicked, the code inside the arrow function is executed.
In this case, it starts the `timer` the value of the `timer` will be updated. */
startBtn.addEventListener('click',() => 
{
    if(timer)
    {
        timer = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(stopWatch, 1);
    }
})

/* This code is adding an event listener to the pause button. When the pause button is clicked, the code inside the event listener is executed.
In this case, it sets the value of the `timer` variable to `false`, effectively pausing the stopwatch. */
pausetBtn.addEventListener('click',() => 
{
    if (!timer) {
        timer = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
})

/* This code block is adding an event listener to the reset button. When the reset button is clicked,
the code inside the event listener is executed. In this case, it resets the value of the `timer` to 0. */
resetBtn.addEventListener('click', () =>
{
	timer = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    sec = 0;
    count = 0;
	document.getElementById('hour').innerHTML = "00";
	document.getElementById('minute').innerHTML = "00";
	document.getElementById('second').innerHTML = "00";
	document.getElementById('millisec').innerHTML = "00";
});

/**
 * This function `stopWatch` is a JavaScript function that updates the time displayed on a stopwatch
 * every 10 milliseconds.
 */
const stopWatch = () =>
{
    elapsedTime = Date.now() - startTime;

    count = Math.floor((elapsedTime / 10) % 100);
    sec = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    document.getElementById('millisec').innerText = count.toString().padStart(2, "0");
    document.getElementById('second').innerText = sec.toString().padStart(2, "0");
    document.getElementById('minute').innerText = mins.toString().padStart(2, "0");
    document.getElementById('hour').innerText = hrs.toString().padStart(2, "0");
}