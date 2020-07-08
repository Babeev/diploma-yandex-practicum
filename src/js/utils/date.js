export class CustomDate {
  constructor(today, weekAgo, months, days) {
    this.today = today; 
    this.weekAgo = weekAgo; 
    this.months = months;
    this.days = days;
  }
  countDate(time) {
    this.date = new Date(time);
    this.year = this.date.getFullYear();
    this.month = this.months[this.date.getMonth()];
    this.day = this.days[this.date.getDay()];
    return `${this.date.getDate()} ${this.month}, ${this.year}`;
  }
}