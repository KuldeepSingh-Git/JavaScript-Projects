/**
 * This JavaScript code is a function that displays the current date and time in a specific format on a web page.
 */
const time = () =>
{
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    let datetime = new Date();
    let day = datetime.getDay();
    let date = datetime.getDate().toString().padStart(2, "0");
    let month = datetime.getMonth();
    let year = datetime.getFullYear();
    let hour = datetime.getHours().toString().padStart(2, "0");
    let minutes = datetime.getMinutes().toString().padStart(2, "0");
    let second = datetime.getSeconds().toString().padStart(2, "0");
    let am_pm = 'AM';
    
    if(hour>12)
    {
        hour = hour%12;
        am_pm = 'PM';
    }

    document.getElementById('day').innerHTML = days[day];
    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML = months[month];
    document.getElementById('year').innerHTML = year;
    document.getElementById('am-pm').innerHTML = am_pm;
    document.getElementById('time').innerHTML = `${hour}:${minutes}:${second}`;
}
setInterval(time,100);
