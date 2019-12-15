const bookmarks = [];
  let adding = false;
  let error =null;
  let filter = 0;
  

  const findById = function (id) {
    return bookmarks.find(currentBookmark => currentBookmark.id === id);
  };

const filterBy = function () {

};

const addNewBookmark = function (bmark) {
    bookmarks.push(bmark);
};

const editBookmark = function () {

};

const deleteBookmark = function () {

};

export default {
bookmarks,
adding,
error,
filter,
findById,
filterBy,
addNewBookmark,
editBookmark,
deleteBookmark
};
