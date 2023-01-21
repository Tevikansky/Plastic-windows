const timer = (deadline) => {
  const timerDays = document.querySelectorAll('.count_1 > span')
  const timerHours = document.querySelectorAll('.count_2 > span')
  const timerMinutes = document.querySelectorAll('.count_3 > span')
  const timerSeconds = document.querySelectorAll('.count_4 > span')
  const countdownText = document.querySelectorAll('.countdown-text')
  const orderFormSubheading = document.querySelectorAll('.order-form-subheading')
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
      countdownText.forEach((e) => {
        e.textContent = "Акция завершена, скоро будет новая!";
      })
      orderFormSubheading.forEach((e) => {
        e.textContent = "для уточнения размера скидки";
      })
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
    changeTime(timerDays, getTime.days);
    changeTime(timerHours, getTime.hours);
    changeTime(timerMinutes, getTime.minutes);
    changeTime(timerSeconds, getTime.seconds);
  }

  const changeTime = (timer, time) => {
    timer.forEach((timer) => {
      timer.textContent = time;
    })
  }

  updateClock()


  timerId = setInterval(updateClock, 1000)

}

export default timer