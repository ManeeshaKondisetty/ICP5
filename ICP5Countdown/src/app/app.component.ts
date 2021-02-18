import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public remainingTime = '';
  selecteddate = '';


  ticking = () => {
    let subtractDates = Date.parse(this.selecteddate) - Date.now();
    if (subtractDates < 0) {
      clearInterval(this.timer);
      this.remainingTime = 'Past Date, please select future dates for the event.';
      return;
    }

    const oneDay = 1000 * 60 * 60 * 24;
    const oneMin = 1000 * 60 * 60;
    const oneSec = 1000 * 60;
    const d = Math.floor(subtractDates / (oneDay));
    subtractDates -= Math.floor(subtractDates / (oneDay)) * oneDay;
    const h = Math.floor(subtractDates / (oneMin));
    subtractDates -= h * oneMin;
    const m = Math.floor(subtractDates / (oneSec));
    subtractDates -= m * oneSec;

    this.remainingTime = `${d} days  ${h} hours  ${m} minutes  ${Math.floor(subtractDates / 1000)} seconds`;
  }

  timer = setInterval(this.ticking, 1000);

  // tslint:disable-next-line:typedef
  public showTimer() {
    // @ts-ignore
    document.getElementById('timerSec').style.visibility = 'visible';
  }
}
