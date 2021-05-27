class CountdownTimer {
  constructor({ selector, targetDate}) {
    this.targetDate = targetDate;
    this.daysNumber = document.querySelector(`${selector} span[data-value="days"]`);
    this.hoursNumber = document.querySelector(`${selector} span[data-value="hours"]`);
    this.minsNumber = document.querySelector(`${selector} span[data-value="mins"]`);
    this.secsNumber = document.querySelector(`${selector} span[data-value="secs"]`);
  }

 startTimer() {
      const targetTime = Date.parse(this.targetDate);
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetTime-currentTime;
      const time = this.getTimeComponents(deltaTime);

      this.updateTimerFace(time);
    }, 1000);
 }

 updateTimerFace ({ days, hours, mins, secs }) {
  this.daysNumber.textContent = `${days}`;
  this.hoursNumber.textContent = `${hours}`;
  this.minsNumber.textContent = `${mins}`;
  this.secsNumber.textContent = `${secs}`;
}

 pad(value) {
  return String(value).padStart(2, '0');
}
 padDays(value) {
  return String(value).padStart(3, '0');
}

 getTimeComponents(time) {
const days = this.padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

return { days, hours, mins, secs };
}
}
const newDate = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 25, 2021'),
});

newDate.startTimer();
