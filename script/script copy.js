window.addEventListener('DOMContentLoaded', () => {
    'use srict';
    //timer
    function countTimer(deadLine) {
        // объявляем переменные
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timarSeconds = document.querySelector('#timer-seconds');

            function getTimeRamaining(){
            let dateStop = new Date(deadLine).getTime(), // deadline передаем в при вызове функции counterTimer
            dateNow = new Date().getTime(); // берем сегодняшний день
            timeRamainig = (dateStop - dateNow) / 1000; // вычитываем милисекунды до конца deadLine-ф 
            seconds = Math.floor(timeRamainig % 60);    // округляем с помощью mathfloor и полученные милисекунды делим с остатком 
            minutes = Math.floor((timeRamainig / 60) % 60); // так же вычисляем и минуты
            hours = Math.floor(timeRamainig / 60 / 60); // так же и часы 
            // возвращаем в объект (что бы было видно в следующих функциях);
            return {
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                getTimeRamaining: getTimeRamaining
            }
        }

        function updateClock (){
            let timer = getTimeRamaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timarSeconds.textContent = timer.seconds;

            // запускаем таймер каждую секунду с условием 
            if (timeRamainig > 0) {
                setTimeout (updateClock, 1000)
            } else if(timeRamainig <= 0){
                timerHours.textContent = 0;
                timerMinutes.textContent = 0;
                timarSeconds.textContent = 0;
            }
        }
        updateClock();
    }
    countTimer('03 march 2021');
});
