import $ from 'jquery';

import './main.css';

import bookmarksList from './bookmarks-list';
import api from './api';
import store from './store';

const main = function () {
  api.getBookmarks()  
  .then((items) => {
    items.forEach((item) => store.addNewBookmark(item));
    bookmarksList.render();
    });
  bookmarksList.bindEventListeners();
  bookmarksList.render();
};

$(main);