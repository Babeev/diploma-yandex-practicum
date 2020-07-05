import "./pages/index.css";
import {button, searchInput, find, more, cardlist} from "./js/constants/constants.js";


find.onload();

button.addEventListener('mousedown', function() {searchInput.submit()});
more.addEventListener('click', function() {
  cardlist.render();
});