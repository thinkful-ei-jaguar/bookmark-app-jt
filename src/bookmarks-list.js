import $ from 'jquery';

import store from './store';
import api from './api';

const generateBookmarkElement = function (bMark) {
    let bookmarkTitle = `<span class="">${bMark.name}</span>`;
    if (!item.checked) {
    itemTitle = `
      <form class="js-edit-item">
        <input class="shopping-item" type="text" value="${item.name}" />
      </form>
    `;
}

const generateBookmarkListString = function (bookmarkList) {
    const bMarks = bookmarkList.map((bMark) => generateBookmarkElement(bMark));
    return bMarks.join('');
};

const render = function () {

};

const handleNewBookmarkSubmit = function () {

}; 

const generateIdFromElement = function (bookmark) {

};

const handleDeleteBookmarkClicked = function (){

}

const handleEditBookmarkSubmit = function (){

};

const handleToggleFilterClick = function () {

};


const bindEventListeners = function () {
  handleNewBookmarkSubmit,
  handleDeleteBookmarkClicked,
  handleEditBookmarkSubmit,
  handleToggleFilterClick
  };

export default {
    render,
    bindEventListeners
  }