// This is a simple QR code generator that takes user input and generates a QR code image. It uses the qrserver API to generate the QR code image.
let userInput = document.getElementById('inputbox');
const generateBtn = document.getElementById('btn');
const qrBox = document.getElementById('qrcode');
const image = document.querySelector('.qrcode img');
let text = '';

/*
    This code adds an event listener to the generate button. When the button is clicked, This code checks if the input box is empty.
    If the input box is empty, an alert message is displayed. If the input box is not empty, the code proceeds to generate the QR code.
*/
generateBtn.addEventListener('click',() =>
{
    if(userInput.value != "")
    {
        if(text != userInput.value)
        {
            text = userInput.value;
            generateBtn.innerText = 'Generating...';
            image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
            image.addEventListener('load',() =>
            {
                generateBtn.innerText = 'QR Generated';
                qrBox.classList.remove('displaynone');
            })
        }
    }
    else
        alert('Enter a valid input')
})

// Add an event listener to the input box to detect when the input value is empty, then resets the project.
userInput.addEventListener("keyup", ()=>{
	if(!userInput.value)
	{
		qrBox.classList.add('displaynone');
        generateBtn.innerText = 'Generate';
	}
})