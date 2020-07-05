export class Find {
  constructor(cardlist, load, newsApi, input, dataStorage, errorCustomText) {
    this.cardlist = cardlist;
    this.load = load;
    this.newsApi = newsApi;
    this.input = input;
    this.dataStorage = dataStorage;
    this.errorCustomText = errorCustomText;
  }
  querry() {
    this.cardlist.clear();
    this.load.loading(true);
    this.newsApi.getNews(this.input.value)
    .then(result => {
      this.load.loading(false);
      let length = result.totalResults;
      this.check(length, result);
    })
    .catch(err => {
      this.load.loading(false);
      this.load.err(true, `Ошибка: ${err}`);
    })
  }

  check(length, result) {
    if(length > 0) {
      this.load.err(false);
      this.dataStorage.toStorage(result, 'news');
      this.cardlist.render();
    } else {
      this.dataStorage.clear();
      this.load.err(true, this.errorCustomText);
    }
  }
  
  onload() {
    if(localStorage.news) {
      this.load.loading(false);
      this.cardlist.render();
    } else {
      this.cardlist.clear();
    }
  }
}