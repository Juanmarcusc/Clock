setInterval(() => {
    let clock = document.getElementById('clock');
    let dayDisplay = document.getElementById('day');
    let month = document.getElementById('month');
    let year = document.getElementById('year');

    // Pegando o tempo
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes <=9) {
        minutes = `0${minutes}`;
    }
    let seconds = date.getSeconds();
    if (seconds <= 9) {
        seconds = `0${seconds}`;
    }

    // Pegando Mês, ano e dias 
    let cMonth = date.getMonth() + 1;
    let cYear = date.getFullYear();
    let day = date.getDay();

    let daysName = ['Sunday', 'Monday', 'Tuerday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];

    // Am or Pm
    if (hours < 12) {
        document.getElementById('amOrpm').innerHTML = 'AM';
    } else {
        document.getElementById('amOrpm').innerHTML = 'PM';
    }

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    dayDisplay.innerHTML = daysName[day];
    month.innerHTML = cMonth;
    year.innerHTML = `${cYear}`;
}, 1000);

