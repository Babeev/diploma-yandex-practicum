export class CommitCard {
  constructor(date) {
    this.date = date;
  }
  
  create(commit) {
    const url = commit.html_url;
    const link = commit.author.avatar_url;
    const published = this.date.countDate(commit.commit.author.date);
    const name = commit.commit.author.name;
    const email = commit.commit.author.email;
    const descriptionText = commit.commit.message;

    const swiper = document.createElement('div');
    const container = document.createElement('div');
    const date = document.createElement('p');
    const author = document.createElement('div');
    const avatar = document.createElement('img');
    const profile = document.createElement('div');
    const profileName = document.createElement('p');
    const profileEmail = document.createElement('p');
    const text = document.createElement('p');
  
    swiper.classList.add('swiper-slide');
    container.classList.add('commits__container');
    date.classList.add('commits__date');
    author.classList.add('commits__author');
    avatar.classList.add('commits__avatar');
    profile.classList.add('commits__profile');
    profileName.classList.add('commits__name');
    profileEmail.classList.add('commits__email');
    text.classList.add('commits__text');

    swiper.setAttribute('href', url);
    swiper.setAttribute('target', '_blank');
    date.textContent = published;
    avatar.setAttribute('src', link);
    avatar.setAttribute('alt', 'Аватарка');
    profileName.textContent = name;
    profileEmail.textContent = email;
    text.textContent = descriptionText;
  
    swiper.appendChild(container);
    container.appendChild(date);
    container.appendChild(author);
    author.appendChild(avatar);
    author.appendChild(profile);
    profile.appendChild(profileName);
    profile.appendChild(profileEmail);
    container.appendChild(text);

    return swiper;
  }
}
  
  
  