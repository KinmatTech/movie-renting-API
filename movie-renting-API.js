// Creating a Movie Class with Constructor
class Movie {
    constructor(title, genre, rating, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.rating = rating;
      this.availableCopies = availableCopies;
    }
  
// Creating movie renting method to display in console
    rentMovie() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        console.log(" ")
        console.log(`You have rented "${this.title}". Enjoy your movie night!`);
      } else {
        console.log(`Sorry, "${this.title}" is currently out of stock.`);
      }
    }
  
    // Returning movie renting method to console   
    returnMovie() {
      this.availableCopies++;
      console.log(`"${this.title}" has been returned. Thank you!`);
    }
  
    // Outputing Movie information to console
    displayMovieInfo() {
      console.log(`
        Movie Information:
        Title: ${this.title}
        Genre: ${this.genre}
        Rating: ${this.rating}
        Available Copies: ${this.availableCopies}
      `);
    }
  }
  
  // Creating a Movie Store class with Constructor
  class MovieStore {
    constructor() {
      this.movies = [];
      console.log(" ");
    }

  // Adding movies to Movie Store 
      addMovie(movie) {
      this.movies.push(movie);
      console.log(`"${movie.title}" has been added to the movie store.`);
    }
  
    // Displaying and Validating Renting Movie Information
    rentMovie(title) {
      const movie = this.findMovie(title);
      if (movie) {
        movie.rentMovie();
      } else {
        console.log(" ")
        console.log(`Movie "${title}" not found in the movie store.`);
      }
    }
  
    // Validating if movie is stored in movie store
    returnMovie(title) {
      const movie = this.findMovie(title);
      if (movie) {
        movie.returnMovie();
      } else {
        console.log(`Movie "${title}" not found in the movie store.`);
      }
    }
  
    // Locate movie if movie title exist in movie store
    findMovie(title) {
      return this.movies.find((movie) => movie.title === title);
    }
  
    // Display movie if available in movie store
    displayMovies() {
        console.log(" ")
      console.log("Available Movies:");
      this.movies.forEach((movie) => console.log(`- ${movie.title}`));
    }
  }
  
    
  // Create movies
  const movie1 = new Movie("Dragon Forever", "Hollywood Movie", "NC17", 7);
  const movie2 = new Movie("Evil Forest", "Nollywood Movie", "NR", 6);
  const movie3 = new Movie("Spider Man", "Cartoon", "PG", 9);
  
  // Creating movie store
  const movieStore = new MovieStore();
  
  // Inserting movies to the store
  movieStore.addMovie(movie1);
  movieStore.addMovie(movie2);
  movieStore.addMovie(movie3);
  
  // Displaying available movies
  movieStore.displayMovies();
  
  // Rent a movie
  movieStore.rentMovie("Dragon Forever");
  
  // Return a movie
  movieStore.returnMovie("Dragon Forever");
  
  // Display movie information
  movie1.displayMovieInfo();
  movie2.displayMovieInfo();
  movie3.displayMovieInfo();