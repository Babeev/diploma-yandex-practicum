export class Statistics {
    constructor(dataStorage, dateContainer, charts, dayOfMonth, days, querry, totalQuerry, titleQuerry) {
      this.dataStorage = dataStorage;
      this.countTitle = 0;
      this.countDescription = 0;
      this.weekLength = 7;
      this.dateContainer = dateContainer;
      this.charts = charts;
      this.dayOfMonth = dayOfMonth;
      this.days = days;
      this.arr = [[],[],[],[],[],[],[]];
      this.querry = querry;
      this.totalQuerry = totalQuerry;
      this.titleQuerry = titleQuerry;
    }
    onload() {
      if(localStorage.news) {
        this.news = this.dataStorage.fromStorage('news');
        this.textQuerry = this.dataStorage.fromStorage('querry');
        this.total = JSON.parse(localStorage.getItem('news')).totalResults;
        this._counting();
      } else {
        console.log('Новостей нет');
        return;
      }
    }
    _counting() {
      this.news.forEach(element => {
        let date = new Date(element.publishedAt);
        this._find(element.title, 'title', date);
        this._find(element.description, 'description', date);
      }); 
      this._render();
    }
    _find(elem, type, date) {
      if(elem) {
        const сondition = elem.toLowerCase().includes(this.textQuerry.toLowerCase());
        if(сondition && type == 'title') {
          this.arr[date.getDay()].push(date);
          this.countTitle++;
        } else if(сondition && type == 'description') {
          this.arr[date.getDay()].push(date);
          this.countDescription++;
        } else {
          return;
        }
        localStorage.setItem('arr', JSON.stringify(this.arr));
      } else {
        return;
      }
    }
    _render() {
      this.titleQuerry.textContent = `${this.countTitle}`;
      this.querry.textContent = `Вы спросили: «${this.textQuerry}»`
      this.totalQuerry.textContent = `${this.total}`;
      for(let daysBefore = 0; daysBefore < this.weekLength; daysBefore++) {
        const day = document.createElement('li');
        day.classList.add('analytics__day');
        day.textContent = `${this.dayOfMonth.getDate()}, ${this.days[this.dayOfMonth.getDay()]}`;
        this.dateContainer.appendChild(day);
  
        const percent = JSON.parse(localStorage.arr)[daysBefore].length;
        const chart = document.createElement('div');
        chart.classList.add('analytics__chart');
        chart.setAttribute('style', `width: ${percent}%; background: #2F71E5;`);
        chart.textContent = percent;
        this.charts.appendChild(chart);
        this.dayOfMonth.setDate(this.dayOfMonth.getDate() + 1);
      }
    }
  }