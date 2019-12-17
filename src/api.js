const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jt/bookmarks';

const getBookmarks = function () {
  return fetch(BASE_URL);

};


const createBookmark = function (body) {

  let newBookmark = JSON.stringify(body);
   console.log(newBookmark);
  

  return fetch((BASE_URL), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newBookmark
  });
};

const updateBookmark = function (id, updateData) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData),
  });
};

export default {
  getBookmarks,
  createBookmark,
  updateBookmark
};