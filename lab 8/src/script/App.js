const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/movie/top_rated?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+ API_KEY;

const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url) {

    fetch(url,{
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            if(data.results.length !== 0){
                showMovies(data.results);
            }else{
                main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
            }

    })  .catch(() => {
        main.innerHTML= `<h1 class="no-results">Connect VPN</h1>`
    })

}


function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average} = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
             <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span >${vote_average}</span>
            </div>
        `
        main.appendChild(movieElement);

    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let searchValue = search.value;

    if(searchValue) {
        getMovies(searchURL+'&query='+searchValue)
    }else{
        getMovies(API_URL);
    }

})

function ClearInput(){
    const input = document.querySelector("#search")
    input.value = ""
    getMovies(API_URL);
}

document.querySelectorAll(".input__clear")[0].addEventListener('click', ClearInput)