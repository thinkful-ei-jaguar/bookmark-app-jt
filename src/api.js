const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jt/bookmarks';

const getBookmarks = function() {
    return fetch (`${BASE_URL}/bookmarks`);
    
  };
  console.log(getBookmarks);
  const createBookmark = function(name) {
    let newBookmark = JSON.stringify({
      'name': name,
    });
  
    return fetch(`${BASE_URL}/bookmarks`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newBookmark
    });
  };
  
  const updateBookmark = function(id, updateData) {
    return fetch(`${BASE_URL}/bookmarks/${id}`,{
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