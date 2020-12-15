const secondHand = document.querySelector('.second');
const minsHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
const deg = 360;

function setDate(){
    const now = new Date();

    //calculate second
    const second = now.getSeconds();
    const secondDegrees = ((second/60) * deg);
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    //calculate minute
    const mins = now.getMinutes();
    const minuteDegrees = ((mins/60) * deg);
    minsHand.style.transform = `rotate(${minuteDegrees}deg)`;

    //calculate hour
    const hour = now.getHours();
    const houreDegrees = ((hour/12) * deg);
    hourHand.style.transform = `rotate(${houreDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();