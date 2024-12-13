// console.log('Welcome to Movie Search API')

let api = "https://www.omdbapi.com/?apikey=db001941&t=";

// fetch(api)
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// By using the Arrow function we can minify the  code into a single line

let title = document.querySelector("#title");
let description = document.querySelector("#description");
let genre = document.querySelector("#genre");
let actors = document.querySelector("#actors");
let directors = document.querySelector("#directors");
let awards = document.querySelector("#awards");
let collection = document.querySelector("#collection");
let ln = document.querySelector("#ln");
let ratings = document.querySelector("#ratings");
let poster = document.querySelector("#poster");
let container = document.querySelector("#container");
let error = document.querySelector("#error");
let suggestion = document.querySelector(".suggestion");

container.classList.add("hidden");

function search() {
  let movieName = document.querySelector("#movieName");
  let query = api + movieName.value;

  fetch(query)
    .then((data) => data.json())
    .then((data) => {
      error.innerText = "";
      if (data.Error === "Movie not found!") {
        error.innerText = "Sorry! Movie not found  ☹";
      } else {
        container.classList.remove("hidden");

        title.innerText = data.Title;
        description.innerText = data.Plot;
        genre.innerText = data.Genre;
        actors.innerText = data.Actors;
        directors.innerText = data.Director;
        awards.innerText = data.Awards;
        collection.innerText = data.BoxOffice;
        ln.innerText = data.Language;
        ratings.innerText = data.imdbRating;
        poster.src = data.Poster;

        if (data.imdbRating > 7) {
          suggestion.innerText = "Worth The Hype!";
          suggestion.classList.add("go");
        } else if (data.imdbRating >= 6 && data.imdbRating < 7) {
          suggestion.innerText = "Give It A Try";
          suggestion.classList.add("ok");
        } else {
          suggestion.innerText = "Not Worth the Hype";
          suggestion.classList.add("no");
        }
      }
    });
}
