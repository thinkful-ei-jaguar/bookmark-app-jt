import $ from 'jquery';

import store from './store';
import api from './api';

const generateBookmarkElement = function (bMark) {
    let bookmarkTitle = `<span class="js-bookmark-entry" data-item-id="${bMark.id}"><a href="${bMark.url}">${bMark.title}</a>${bMark.rating}</span>`;
    console.log(bMark);
    if (!store.adding) {
      bookmarkTitle = 
       `<form class="js-adding-bookmark">
        <li class="js-bookmark-entry" type="text"data-item-id="${bMark.id}"><a href="${bMark.url}">${bMark.title}</a> ${bMark.rating}</span>;
        </li>
      </form>`
    ;}
    return `
    <li class="js-bookmark-entry">
     ${bookmarkTitle}
      <div class="bookmark-item-controls">
        <button class="bookmark-item-toggle js-bookmark-expand">
          <span class="button-label">More Info</span>
        </button>
        <button class="bookmark-item-delete js-bookmark-delete">
          <span class="button-label">Delete</span>
        </button>
      </div>
    </li><br>`;
};
const generateBookmarkListString = function (bookmarkList) {
    const bMs= bookmarkList.map((bM) => {  
     const bookmarkString = generateBookmarkElement(bM)
     return bookmarkString;
    });
    return bMs.join('');
};
const generateForm = function (){
let form = '';
    if (store.adding === true) {
        form = `
        <form id= "js-create-new-bookmark">
        <label for='add-book' class='add' >Add New Bookmark</label><br>
        <input class='input-book' type='text'  name='url' id='add-book' placeholder='link to website' required><br>
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


const render = function () {
    //console.log('render ran');
    // Filter item list if store prop is true by item.checked === false
    //let form = generateForm();
    
    const bookmarkListItemsString = generateBookmarkListString(store.bookmarks);
    
    $('.js-bookmark-list').html(bookmarkListItemsString);
    $('.add-new-bookmark-form').html(generateForm());
};

/*const addBookmark = function () {
    console.log('addBookmark function ran');
    return `
        `;
};*/

const createNewBookmark = function (){
    if(store.added === true){
return 
    }
    console.log('createNewBookmark not work')
}


const handleCreateNewBookmark = function () {
    $('#js-bookmark-list-form').on('click', '.js-bookmark-list-entry', event => {
        event.preventDefault();
        store.adding = true;
        render();
        // handleNewBookmarkSubmit();
    })
    
};

const handleCancelBookmark = function (){
    $('#js-create-new-bookmark').on('click', '.cancel-button', event => {
        store.adding = false;
        render();
    })
}

const handleNewBookmarkSubmit = function () {
    
    // $( "#js-bookmark-list-form" ).submit(function( event ) 
    // { alert( "Handler for .submit() called." ); 
   
    // event.preventDefault(); });
    
    $('body').on('click', '.create-button', event => {
       // alert('anything');
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
            .then(res => res.json())
            .then(newItem => {
                store.addNewBookmark(newItem);
                store.adding = false;
                render();
            })
        // store.addNewBookmark(newBookmarkEntry);
        // render();
    });
};

const generateIdFromElement = function (bookmark) {
    return $(bookmark)
    .closest('.js-bookmark-entry')
    .data('data-item-id');
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
        handleToggleFilterClick();
};

export default {
    render,
    bindEventListeners
};
