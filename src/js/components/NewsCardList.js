export class CardList {
  constructor(container, cardClass, toggle, dataStorage) {
    this.container = container;
    this.cardClass = cardClass;
    this.dataStorage = dataStorage;
    this.toggle = toggle;
    this.maxcards = 3;
    this.start = 0;
  }

  render() {
    const cards = this.dataStorage.fromStorage('news');
    let count = this.start + Math.min(cards.length - this.start, this.maxcards);
    for (this.start; this.start < count; this.start++) {
      const card = cards[this.start];
      this._add(card);
    }
    this._showMore(cards);
  }

  _add(cardElems) {
    const card = this.cardClass.create(cardElems);
    this.container.appendChild(card);
  }

  _showMore(cards) {
    this.toggle.toggleButton(this.start < cards.length); 
  }

  clear() {
    this.start = 0;
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}
