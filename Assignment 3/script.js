// Define an array of movies (just for demonstration purposes)
const movies = [
    {
        title: "Jungle Cruise",
        genre: "Action",
        year: "2021",
        language: "English",
        rating: "4",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "Free Guy",
        genre: "Comedy",
        year: "2021",
        language: "English",
        rating: "4",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "Don't Look Up",
        genre: "Comedy",
        year: "2021",
        language: "English",
        rating: "5",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "The Suicide Squad",
        genre: "Action",
        year: "2021",
        language: "English",
        rating: "4",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "The French Dispatch",
        genre: "Drama",
        year: "2021",
        language: "English",
        rating: "5",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "Dune",
        genre: "Action",
        year: "2021",
        language: "English",
        rating: "4",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "The Father",
        genre: "Drama",
        year: "2020",
        language: "English",
        rating: "5",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "Soul",
        genre: "Comedy",
        year: "2020",
        language: "English",
        rating: "4",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "Tenet",
        genre: "Action",
        year: "2020",
        language: "English",
        rating: "4",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "Mank",
        genre: "Drama",
        year: "2020",
        language: "English",
        rating: "4",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "Adú",
        genre: "Drama",
        year: "2020",
        language: "Spanish",
        rating: "5",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "The Platform",
        genre: "Drama",
        year: "2019",
        language: "Spanish",
        rating: "4",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "Cuties",
        genre: "Drama",
        year: "2020",
        language: "French",
        rating: "4",
        image: "https://via.placeholder.com/200x300"
    },
    {
        title: "Two of Us",
        genre: "Drama",
        year: "2020",
        language: "French",
        rating: "5",
        image: "https://via.placeholder.com/200x300"
    }
];

// Get references to the HTML elements we need
const form = document.querySelector("#movie-form");
const movieList = document.querySelector("#movie-list");

// Listen for changes to the form fields
form.addEventListener("change", () => {
    // Get the user's selections from the form
    const genre = form.elements.genre.value;
    const year = form.elements.year.value;
    const language = form.elements.language.value;
    const rating = form.elements.rating.value;

    // Filter the movies based on the user's selections
    const filteredMovies = movies.filter((movie) => {
        return (
            (genre === "" || movie.genre === genre) &&
            (year === "" || movie.year === year) &&
            (language === "" || movie.language === language) &&
            (rating === "" || movie.rating === rating)
        );
    });

    // Clear the existing movie list
    movieList.innerHTML = "";

    // Generate movie cards for the filtered movies and add them to the movie list
    filteredMovies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>Genre: ${movie.genre}</p>
        <p>Year: ${movie.year}</p>
        <p>Language: ${movie.language}</p>
        <p>Rating: ${movie.rating}</p>
      `;
        movieList.appendChild(movieCard);
    });
});
