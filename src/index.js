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

      // const item = store.bookmarks[0];
      // console.log('current name: ' + item.title);
      // store.findAndUpdate(item.id, { name: 'barbaz' });
      // console.log('new name: ' + item.title);

    });
  bookmarksList.bindEventListeners();
  bookmarksList.render();
};

$(main);