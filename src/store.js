const bookmarks = [];
  let adding = false;
  let error =null;
  let filter = 0;
  let currentFilter = 1;

  const findById = function (id) {
    return bookmarks.find(currentBookmark => currentBookmark.id === id);
  };

const filterBy = function () {

};

const toggleBookmark = function (id){
let bookmark = findById(id);
bookmark.expanded = !bookmark.expanded; 


}

const addNewBookmark = function (bmark) {
  bmark.expanded = false; 
  bookmarks.push(bmark);

};

const editBookmark = function (id, newData) {
  let foundItem = this.findById(id);
  Object.assign(foundItem, newData);
};

const deleteBookmark = function (id) {
  this.bookmarks = this.bookmarks.filter(currentItem => currentItem.id !== id);

};
const setError = function (error) {
  this.error = error;
};

export default {
bookmarks,
adding,
error,
filter,
currentFilter,
findById,
filterBy,
addNewBookmark,
editBookmark,
deleteBookmark,
toggleBookmark,
setError
};
