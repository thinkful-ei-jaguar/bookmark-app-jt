import $ from 'jquery';

import store from './store';
import api from './api';

const generateBookmarkElement = function (bMark) {
    let bookmarkTitle = `<span class="js-bookmark-entry" data-item-id="${bMark.id}">${bMark.title}     ${bMark.rating}</span>`;
    console.log(bMark);
    let expandedInfo = '';
    if (bMark.expanded === true) {
        expandedInfo = `<h2><a href="${bMark.url}">Visit Site</a></h2><p id="expand-info">${bMark.desc}</p><br>`;
    }
    return `
    <li class="js-bookmark-entry" data-item-id="${bMark.id}">
     ${bookmarkTitle}
      <div class="bookmark-item-controls">
        <button class="bookmark-item-toggle js-bookmark-expand">
          <span class="button-label">More Info</span>
        </button>
        <button class="bookmark-item-delete js-bookmark-delete">
          <span class="button-label">Delete</span>
        </button>
      </div>
      ${expandedInfo}
    </li><br>`;
};
const generateBookmarkListString = function (bookmarkList) {
    const bMs = bookmarkList.map((bM) => {
        const bookmarkString = generateBookmarkElement(bM)
        return bookmarkString;
    });
    return bMs.join('');
};
const generateForm = function () {
    let form = '';
    if (store.adding === true) {
        form = `
        <form id= "js-create-new-bookmark">
        <label for='add-book' class='add' >Add New Bookmark</label><br>
        <input class='input-book' type='text'  name='url' id='add-book' placeholder='link to website' required></input><br>
        <input type="text" class="bookmark-title"name="title" placeholder="bookmark name"></input><br>
        <select class="star-select" type="radio" >
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select><br>
        <textarea name="" id="text-area" cols="30" rows="10"></textarea><br>
        <button type="reset" class="cancel-button">Cancel</button> <button  class="create-button">Create</button>
        </form>`
    }
    return form;
};

const generateError = function (message) {
    return `
        <section class="error-content">
          <button id="cancel-error">X</button>
          <p>${message}</p>
        </section>
      `;
};
const renderError = function () {
    if (store.error) {
        const el = generateError(store.error);
        $('.error-container').html(el);
    } else {
        $('.error-container').empty();
    }
};

const handleCloseError = function () {
    $('.error-container').on('click', '#cancel-error', () => {
        store.setError(null);
        renderError();
    });
};

const render = function () {
    renderError();

    const bookmarkListItemsString = generateBookmarkListString(store.bookmarks);

    $('.js-bookmark-list').html(bookmarkListItemsString);
    $('.add-new-bookmark-form').html(generateForm());
};

const handleCreateNewBookmark = function () {
    $('#js-bookmark-list-form').on('click', '.js-bookmark-list-entry', event => {
        event.preventDefault();
        store.adding = true;
        render();
    })

};

const handleCancelBookmark = function () {
    $('body').on('click', '.cancel-button', event => {
        store.adding = false;
        render();
    })
}

const handleNewBookmarkSubmit = function () {
    $('body').on('click', '.create-button', event => {
        event.preventDefault();
        let newUrlName = $('.input-book').val();
        let newBookmarkDesc = $('#text-area').val();
        let newBookmarkName = $('.bookmark-title').val();
        let newRating = parseInt($('.star-select').val());
        const newBookmarkEntry = {
            title: newBookmarkName,
            url: newUrlName,
            desc: newBookmarkDesc,
            rating: newRating
        };
        api.createBookmark(newBookmarkEntry)
            .then(newItem => {
                store.addNewBookmark(newItem);
                store.adding = false;
                render();
            })
            .catch((error) => {
                store.setError(error.message);
                renderError();
            });
    });
};

const getIdFromElement = function (bookmark) {
    return $(bookmark)
        .closest('.js-bookmark-entry')
        .data('item-id');
};

const handleDeleteBookmarkClicked = function () {
    $('.js-bookmark-list').on('click', '.js-bookmark-delete', event => {
        let id = getIdFromElement(event.currentTarget);
        api.deleteItem(id)
            .then(() => {
                store.deleteBookmark(id);
                render();
            })
            .catch((error) => {
                console.log(error);
                store.setError(error.message);
                renderError();
            });
    });
};
const handleExpandInfo = function () {
    $('.js-bookmark-list').on('click', '.js-bookmark-expand', (event) => {

        event.preventDefault();
        let id = getIdFromElement(event.currentTarget);
        store.toggleBookmark(id);
        console.log(store);
        render();
    });
};

// const handleToggleFilterClick = function () {

// };


const bindEventListeners = function () {
    handleCreateNewBookmark();
    handleNewBookmarkSubmit();
    handleDeleteBookmarkClicked();
    handleCancelBookmark();
    //handleToggleFilterClick();
    handleExpandInfo();
    handleCloseError();
};

export default {
    render,
    bindEventListeners
};
