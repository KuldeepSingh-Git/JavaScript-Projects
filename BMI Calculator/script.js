/* This code is defining for calculating and displaying the BMI (Body Mass Index) of a user. */
const usergender = document.getElementById('gender')
const userage = document.getElementById('age')
const userheight = document.getElementById('height')
const userweight = document.getElementById('weight')
const userresult = document.getElementById('result')
const message_box = document.getElementsByClassName('message-box')[0];

const calculateBMI = () =>
{
    if(userage.value<=0 || userheight.value<=0 || userweight.value<=0)
        alert("Please enter valid data");
    else
    {
        let height = (userheight.value/100);
        let BMI = (userweight.value/(height**2)).toFixed(2);
        userresult.innerText = BMI;
        message_box.classList.remove('nonedisplay');
    }
}

const hidemsg = () =>
{
    message_box.classList.add('nonedisplay');
}