let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

function updateClock() {
    let Day = new Date();
    let hh = Day.getHours() * 30;
    let mm = Day.getMinutes() * 6;
    let ss = Day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}

setInterval(updateClock, 1000);
