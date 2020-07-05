export class Card {
    constructor(date) {
      this.date = date;
    }
  
    create(card) {
      const url = card.url;
      const link = card.urlToImage;
      const published = this.date(card.publishedAt, 'card');
      const titleText = card.title;
      const descriptionText = card.description;
      const author = card.source.name;

      const container = document.createElement('a');
      const image = document.createElement('img');
      const date = document.createElement('p');
      const title = document.createElement('h3');
      const description = document.createElement('p');
      const sourse = document.createElement('p');
  
      container.classList.add('results__card');
      image.classList.add('results__card-image');
      date.classList.add('results__card-date');
      title.classList.add('results__card-title');
      description.classList.add('results__card-decscripton');
      sourse.classList.add('results__card-sourse');

      container.setAttribute('href', url);  
      container.setAttribute('target', '_blank');  
      image.setAttribute('src', link);
      image.setAttribute('alt', 'Картинка');
      date.textContent = published;
      title.textContent = titleText;
      description.textContent = descriptionText;
      sourse.textContent = author;
  
      container.appendChild(image);
      container.appendChild(date);
      container.appendChild(title);
      container.appendChild(description);
      container.appendChild(sourse);

      return container;
    }
  }
  
  
  