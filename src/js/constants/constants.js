import {NewsApi} from "../modules/NewsApi.js";
import {Find} from "../utils/find.js";
import {date} from "../utils/date.js";
import {Toggle} from "../utils/showMoreCards.js";
import {Card} from "../components/NewsCard.js";
import {CardList} from "../components/NewsCardList.js";
import {DataStorage} from "../modules/DataStorage.js";
import {Load} from "../utils/loading.js";
import {SearchInput} from "../components/SearchInput.js";
import {GithubApi} from "../modules/GithubApi.js";
import {CommitCard} from "../components/CommitCard.js";
import {CommitCardList} from "../components/CommitCardList.js";

const url = 'http://praktikum.tk/news/v2/top-headlines?';
const key = '50cf0fdfceeb410f967a67f3a9a59e9f';
const errorCustomText = 'К сожалению по вашему запросу ничего не найдено.';

const preloader = document.querySelector('.loader');
const error = document.querySelector('.found');
const resuls = document.querySelector('.results');
const errorText = document.querySelector('.found__description');
const more = document.querySelector('.button__results');
const input = document.querySelector('.header__input');
const errorInput = document.querySelector('.header__err');
const button = document.querySelector('.button__header');
const container = document.querySelector('.results__cards');
const commitsLoad = document.querySelector('.swiper-container');
const commitContainer = document.querySelector('.swiper-wrapper');

const newsApi = new NewsApi(url, key);
const toggle = new Toggle(more);
const cardClass = new Card(date);
const dataStorage = new DataStorage();
const cardlist = new CardList(container, cardClass, toggle, dataStorage);
const load = new Load(preloader, input, button, error, errorText, resuls, commitsLoad);
const find = new Find(cardlist, load, newsApi, input, dataStorage, errorCustomText);
const searchInput = new SearchInput(find, input, button, errorInput);
const githubApi = new GithubApi('https://api.github.com/repos/Babeev/diploma-yandex-practicum/commits');
const commitCard = new CommitCard(date);
const commitCardList = new CommitCardList(commitContainer, commitCard, dataStorage);



export {button, searchInput, find, more, cardlist, githubApi, load, commitCardList, dataStorage}