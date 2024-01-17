let val = 0;
const increase = () =>
{
    val += 1;
    document.getElementById("num").innerHTML = val;
}
const decrease = () =>
{
    val -= 1;
    document.getElementById("num").innerHTML = val;
}