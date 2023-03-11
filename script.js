const img = document.querySelector('img');
const btn = document.querySelector('#get-gif');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
let search = 'cats';

function getGif() {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=twHfM7TghUB7C8bUD3ROP21PlgeCU7Pj&s=${search}`,
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

btn.addEventListener('click', getGif);
searchBtn.addEventListener('click', () => {
  if (searchInput.value) {
    search = searchInput.value;
    getGif();
  }
});
