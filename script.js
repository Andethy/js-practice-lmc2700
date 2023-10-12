let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

let outputLine = (line) => {
    // Find the terminal body in the DOM
    let terminalBody = document.getElementById('terminal-body');

    // Create the new terminal line div
    let terminalLine = document.createElement('div');
    terminalLine.className = 'terminal-line';

    // Create the prefix span
    let prefixSpan = document.createElement('span');
    prefixSpan.className = 'terminal-line__prefix';
    prefixSpan.textContent = '$ ';

    // Create the text div
    let textDiv = document.createElement('div');
    textDiv.className = 'terminal-line__text';
    textDiv.textContent = line;  // or you could use innerHTML if you prefer

    // Append the prefix and text to the terminal line
    terminalLine.appendChild(prefixSpan);
    terminalLine.appendChild(textDiv);

    // Append the new terminal line to the terminal body
    terminalBody.appendChild(terminalLine);
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie is added");
    outputLine("A new movie is added");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies....");
    outputLine("Printing all movies....");


    for (let i = 0; i < allMovies.length; i++) {
        console.log(allMovies[i].title + ", rating of " + allMovies[i].rating + ", havewatched: " + allMovies[i].haveWatched);
        outputLine(allMovies[i].title + ", rating of " + allMovies[i].rating + ", havewatched: " + allMovies[i].haveWatched);
    }
    console.log("");
    outputLine("");
    console.log("You have " + allMovies.length + " movies in total");
    outputLine("You have " + allMovies.length + " movies in total");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    console.log("Printing movies that have a rating higher than " + rating);
    outputLine("Printing movies that have a rating higher than " + rating)
    let count = 0;
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            outputLine(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            count++;
        }
    }
    console.log("");
    outputLine("");
    console.log("In total, there are " + count + " matches");
    outputLine("In total, there are " + count + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...");
    outputLine("changing the status of the movie...");
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title === title) {
            allMovies[i].haveWatched = !(allMovies[i].haveWatched);
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
outputLine("----------------");
console.log("running program......");
outputLine("running program......");
console.log("----------------");
outputLine("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
outputLine("----------------");
addMovie(movie1);
console.log("----------------");
outputLine("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");
outputLine("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");
outputLine("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");
outputLine("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");
outputLine("----------------");

highRatings(3.5);