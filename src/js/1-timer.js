import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  startBtn: document.querySelector('[data-start'),
  dateInput: document.getElementById('datetime-picker'),
  days: document.querySelector('[data-days'),
  hours: document.querySelector('[data-hours'),
  minutes: document.querySelector('[data-minutes'),
  seconds: document.querySelector('[data-seconds'),
};

elements.startBtn.addEventListener('click', onStartBtnCountdown);

elements.startBtn.disabled = true;

let userSelectedDate = '';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future',
        color: '#ef4040',
      });
    } else {
      elements.startBtn.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};

flatpickr(elements.dateInput, options);

let intervalId = 0;

function onStartBtnCountdown() {
  intervalId = setInterval(createTimer, 1000);
  elements.startBtn.disabled = true;
  elements.dateInput.disabled = true;
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function createTimer() {
  const totalMs = userSelectedDate - new Date();
  if (totalMs >= 0) {
    let timeObject = convertMs(totalMs);
    elements.days.textContent = addLeadingZero(timeObject.days);
    elements.hours.textContent = addLeadingZero(timeObject.hours);
    elements.minutes.textContent = addLeadingZero(timeObject.minutes);
    elements.seconds.textContent = addLeadingZero(timeObject.seconds);
  } else {
    iziToast.show({
      title: 'Good!',
      message: 'Countdown finished',
      color: 'green',
    });
    clearTimer();
  }
}

function clearTimer() {
  clearInterval(intervalId);
  elements.startBtn.disabled = true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
