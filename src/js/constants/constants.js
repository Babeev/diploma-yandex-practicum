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
import {Statistics} from "../components/Statistics.js";
import {CustomDate} from "../utils/date.js";

const url = 'https://praktikum.tk/news/v2/everything?';
const key = '50cf0fdfceeb410f967a67f3a9a59e9f';
const errorCustomText = 'К сожалению по вашему запросу ничего не найдено.';
const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const ofMonth = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

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
const querry = document.querySelector('.statistics__title');
const totalQuerry = document.querySelector('.statistics__sum');
const titleQuerry = document.querySelector('.statistics__sum_title');
const dateContainer = document.querySelector('.analytics__days');
const charts = document.querySelector('.analytics__charts');

const today = new Date();
const weekAgo = new Date();
const daysAgo = 6;
weekAgo.setDate(weekAgo.getDate() - daysAgo);
const to = today.toISOString();
const from = weekAgo.toISOString();
const dayOfMonth = new Date(weekAgo.getFullYear(), weekAgo.getMonth(), weekAgo.getDate());

const customDate = new CustomDate(today, weekAgo, months, days);
const newsApi = new NewsApi(url, key, to, from);
const toggle = new Toggle(more);
const cardClass = new Card(customDate);
const dataStorage = new DataStorage();
const cardlist = new CardList(container, cardClass, toggle, dataStorage);
const load = new Load(preloader, input, button, error, errorText, resuls, commitsLoad);
const find = new Find(cardlist, load, newsApi, input, dataStorage, errorCustomText);
const searchInput = new SearchInput(find, input, button, errorInput);
const githubApi = new GithubApi('https://api.github.com/repos/Babeev/diploma-yandex-practicum/commits');
const commitCard = new CommitCard(customDate);
const commitCardList = new CommitCardList(commitContainer, commitCard, dataStorage);
const count = new Statistics(dataStorage, dateContainer, charts, dayOfMonth, days, querry, totalQuerry, titleQuerry);

export {button, searchInput, find, more, cardlist, githubApi, load, commitCardList, dataStorage, count}