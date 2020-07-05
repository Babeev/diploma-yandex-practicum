export class CommitCardList {
    constructor(container, cardClass, dataStorage) {
      this.container = container;
      this.cardClass = cardClass;
      this.dataStorage = dataStorage;
      this.maxcards = 19;
      this.start = 0;
    }
  
    render() {
      const commits = this.dataStorage.fromStorage('commits');
      for (this.start; this.start < this.maxcards; this.start++) {
        const commit = commits[this.start];
        this._add(commit);
      }
    }
  
    _add(commitElems) {
      const commitCard = this.cardClass.create(commitElems);
      this.container.appendChild(commitCard);
    }
  
    clear() {
      this.start = 0;
      while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
      }
    }
  }
  