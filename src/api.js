const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jt';

const getBookmarks = function () {
  return fetch(`${BASE_URL}/bookmarks`);

};


const createBookmark = function (body) {

  // let newBookmark = JSON.stringify({
  //   title,
  //   rating,
  //   url,
  //   desc,

  // });

  return fetch(`${BASE_URL}/bookmarks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  });
};

const updateBookmark = function (id, updateData) {
  return fetch(`${BASE_URL}/bookmarks/${id}`, {
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