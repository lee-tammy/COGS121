/* localStorage.js: Allows us to store the current user in local storage.
*/

var localStorage = window.localStorage;
//localStorage.clear();
console.log(localStorage);


function addToStorage(key, value){
      // then put it back.
  localStorage.setItem(key, value);
}

function getFromStorage(key){
  return localStorage.getItem(key);
}
