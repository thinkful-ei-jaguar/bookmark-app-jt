import $ from 'jquery';

import './main.css';

import bookmarksList from './bookmarks-list';
import api from './api';
import store from './store';

const main = function () {
       api.getBookmarks()
      .then(res => res.json())
      .then((bMarks) => {
        bMarks.forEach((bMark) => store.addNewBookmark(bMark));
        bookmarkList.render();

        /*const item = store.bookmarks[0];
        console.log('current name: ' + item.name);
        store.findAndUpdate(item.id, { name: 'barbaz' });
        console.log('new name: ' + item.name);*/
        
      });
    bookmarksList.bindEventListeners();
    bookmarksList.render();
  };

$(main);