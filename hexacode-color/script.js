const hex_numbers = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const body = document.body;
const changecolor = () =>
{
    let hexacolor = '';
    for(let i = 0; i < 6; i++)
    {
        let x = hex_numbers[Math.floor(Math.random()*hex_numbers.length)];
        hexacolor = hexacolor+x;
    }
    console.log(hexacolor)
    document.body.style.backgroundColor = '#' + hexacolor;
    document.querySelector('#color-code').innerHTML = '#' + hexacolor;
}