export class DataStorage {
  constructor(result) {
    this.result = result;
  }
  toStorage(result, name) {
    localStorage.setItem(`${name}`, JSON.stringify(result));
  }
  fromStorage(name) {
    if(name == 'news') {
      return JSON.parse(localStorage.getItem('news')).articles;
    } else {
      return JSON.parse(localStorage.getItem(`${name}`));
    }
  }
  clear() {
    localStorage.clear();
  }
};