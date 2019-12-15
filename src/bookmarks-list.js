import $ from 'jquery';

import store from './store';
import api from './api';

const generateBookmarkElement = function (bMark) {
    return `<li class="">${bMark.title}${bMark.url}</li>`;
    // if (!store.adding) {
    //     bookmarkTitle = `
    //   <form class="js-adding-bookmark">
    //     <input class="shopping-item" type="text" value="${bookmarks.title}" />
    //   </form>
    // `;
    // }

};

const generateBookmarkListString = function (bookmarkList) {
    const bMarks = bookmarkList.map((bMark) => generateBookmarkElement(bMark));
    return bMarks.join('');
};

const render = function () {
    console.log('render ran');
    // Filter item list if store prop is true by item.checked === false
    if (store.adding) {
        $("#js-create-new-bookmark").show();
        $("#js-bookmarks-list-form").blur();
        $("#js-bookmarks-list-form").hide();
    }
    else {
        $("#js-bookmarks-list-form").show();
        $("#js-create-new-bookmark").blur();
        $("#js-create-new-bookmark").hide();
    }
    // render the shopping list in the DOM
    const bookmarkListItemsString = generateBookmarkListString(store.bookmarks);

    // insert that HTML into the DOM
    $('.js-bookmark-list').html(bookmarkListItemsString);

};

/*const generateBookmarkEntryForm = function (bookmarkEntry) {
    $('.add').submit(function (event) {
        event.preventDefault();
    })
    return `
    `
}*/

const addBookmark = function () {
    console.log('addBookmark function ran');
    return `
        `;
};

const handleCreateNewBookmark = function () {
    $('#js-bookmark-list-form').submit(function (event) {
        event.preventDefault();
        store.adding = true;
        render();
    })
    
};

const handleCancelBookmark = function (){
    $('#js-create-new-bookmark').on('click', '.cancel-button', event => {
        store.adding = false;
        render();
    })
}

const handleNewBookmarkSubmit = function () {
    $('#js-create-bookmark-form').submit(function (event) {
        event.preventDefault();
        const newBmarkTitle = $('.js-bookmark-entry').val();
        const newBmarkRating = $('.js-bookmark-entry').val();
        const newBmarkUrl = $('.js-bookmark-entry').val();
        const newBmarkDesc = $('.js-bookmark-entry').val();
//use parseInt to convert string to integer
        api.createItem(newBmarkTitle, newBmarkRating, newBmarkUrl, newBmarkDesc)
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
        store.addNewBookmark(newBmarkTitle, newBmarkRating, newBmarkUrl, newBmarkDesc);
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
    handleCreateNewBookmark();
        handleNewBookmarkSubmit();
        handleDeleteBookmarkClicked();
        handleEditBookmarkSubmit();
        handleCancelBookmark();
        handleToggleFilterClick()
};

export default {
    render,
    bindEventListeners
}