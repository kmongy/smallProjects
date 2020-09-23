const deadline = 'October 9 2020';

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function initializeClock(endtime) {
  const clock = document.querySelector('#clock-wrapper');
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const time = getTimeRemaining(endtime);

    daysSpan.innerText = time.days;
    hoursSpan.innerText = ('0' + time.hours).slice(-2);
    minutesSpan.innerText = ('0' + time.minutes).slice(-2);
    secondsSpan.innerText = ('0' + time.seconds).slice(-2);

    if (time.total <= 0) {
      clearInterval(timeinterval);
    }

    const timeinterval = setInterval(updateClock, 1000);
  }
  updateClock();
}
initializeClock(deadline);
