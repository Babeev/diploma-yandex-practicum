export class NewsApi {
  constructor(baseUrl, key) {
    this.baseUrl = baseUrl;
    this.key = key;
  }
  getNews(query) {
    this.url = `${this.baseUrl}q=${query}&apiKey=${this.key}&language=ru`;
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