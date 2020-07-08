export class GithubApi { 
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  getCommits() {
    return fetch(this.baseUrl)
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
  