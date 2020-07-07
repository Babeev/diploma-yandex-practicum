export class NewsApi {
  constructor(baseUrl, key, to, from) {
    this.baseUrl = baseUrl;
    this.key = key;
    this.to = to;
    this.from = from;
  }
  getNews(query) {
    this.url = `${this.baseUrl}q=${query}&from=${this.from}&to=${this.to}&pageSize=100&apiKey=${this.key}&language=ru`;
    return fetch(this.url)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    })
    .catch((err) => {
      return Promise.reject(err.message);
    })
  }
}