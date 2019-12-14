import $ from 'jquery';

import store from './store';
import api from './api';

const generateBookmarkElement = function (bMark) {
    let bookmarkTitle = `<span class="">${bMark.name}</span>`;
    if (!bookmarks.adding) {
        bookmarkTitle = `
      <form class="js-adding-bookmark">
        <input class="shopping-item" type="text" value="${bookmarks.title}" />
      </form>
    `;
    }

};

const generateBookmarkListString = function (bookmarkList) {
    const bMarks = bookmarkList.map((bMark) => generateBookmarkElement(bMark));
    return bMarks.join('');
};

const render = function () {
    console.log('render ran');
    // Filter item list if store prop is true by item.checked === false
    let items = [...store.bookmarks];
    if (store.adding) {
        items = items.filter(item => !item.adding);
    }

    // render the shopping list in the DOM
    const bookmarkListItemsString = generateBookmarkListString(items);

    // insert that HTML into the DOM
    $('.js-bookmark-list-entry').html(bookmarkListItemsString);
    addBookmark();
};

/*const generateBookmarkEntryForm = function (bookmarkEntry) {
    $('.add').submit(function (event) {
        event.preventDefault();
    })
    return `
    `
}*/

const addBookmark = function() {
    console.log('addBookmark function ran');
    return `
        <form>
    <label for = 'add-book' class = 'add'>Add New Bookmark</label><br>
  <input class = 'input-book' type = 'text' name = 'link' id = 'add-book' placeholder = 'link to website'required><br>
   <input type="text" placeholder="bookmark name"></input><br>
  <select type= "radio"></select><br>
   <textarea name="" id="" cols="30" rows="10"></textarea><br>
     <button class="cancel-button">Cancel</button> <button class="create-button">Create</button>         
    </form> `;
};

const handleCreateNewBookmark = function () {
    $('.js-bookmark-list-entry').submit(function (event) {
        event.preventDefault();
        console.log(.js-bookmark-list-entry);
        
    })
    render();
};


  const handleNewBookmarkSubmit = function () {
                $('#js-create-bookmark-form').submit(function (event) {
                    event.preventDefault();
                    const newItemName = $('.js-bookmark-list-entry').val();
                    $('.js-bookmark-list-entry').val('');

                    api.createItem(newItemName)
                        .then(res => res.json())
                        .then(newItem => {
                            console.log(newItem);
                            store.addNewBookmark(newItem);
                            render();
                        })
                        .catch(err => {
                            // store.setError(err.message);
                            console.log(err)
                            render();
                        });
                    store.addNewBookmark(newItemName);
                    render();
                });
            };

            const generateIdFromElement = function (bookmark) {

            };

            const handleDeleteBookmarkClicked = function () {

            }

            const handleEditBookmarkSubmit = function () {

            };

            const handleToggleFilterClick = function () {

            };


            const bindEventListeners = function () {
        handleCreateNewBookmark,
            handleNewBookmarkSubmit,
            handleDeleteBookmarkClicked,
            handleEditBookmarkSubmit,
            handleToggleFilterClick
    };

    export default {
        render,
        bindEventListeners
    }