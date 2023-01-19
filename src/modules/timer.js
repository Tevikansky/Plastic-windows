const timer = (deadline) => {
  const timerDays = document.querySelector('.count_1 > span')
  const timerHours = document.querySelector('.count_2 > span')
  const timerMinutes = document.querySelector('.count_3 > span')
  const timerSeconds = document.querySelector('.count_4 > span')
  let timerId = null;

  const getTimeRemaining = () => {
    let dataStop = new Date(deadline).getTime();
    let dataNow = new Date().getTime();
    let timeRemaining = (dataStop - dataNow) / 1000;

    // let days = Math.floor((timeRemaining / 86400));
    let days = Math.floor((timeRemaining / 86400) % 86400);
    let hours = Math.floor((timeRemaining / 3600) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);


    if (days < 10) {
      days = "0" + days;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (timeRemaining < 0) {
      days = "00";
      hours = "00";
      minutes = "00";
      seconds = "00";
      clearInterval(timerId);
    }

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds
    };


  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerDays.textContent = getTime.days;
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

  }

  updateClock()


  timerId = setInterval(updateClock, 1000)

}

export default timer