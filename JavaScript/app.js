$('form').submit(function(event) {
  // Stop the form from submitting
  event.preventDefault();

  // Get The value from the form
  var movieName = $('#search').val();  // variable used in movieOptions s to retrieve the data
  var movieURL = 'http://www.omdbapi.com/?';

  var movieOptions = {
    s: movieName,
    r: 'json'

  };

  function displayMovies(data) {
  console.log(data);
    var movieHTML = '<ul>';
    $.each(data.Search, function(index, value) {
      movieHTML += '<li>';
      movieHTML += '<img ';
      movieHTML += 'src="' + value.Poster + '" ';
      movieHTML += 'alt="' + value.Title + '" >';
      movieHTML += '</li>';
    });//end each
       movieHTML += '</ul>';
    $('#movieInformation').html(movieHTML);

  }
  
  $.getJSON(movieURL, movieOptions, displayMovies);// end getJSON

}); // end submit function


// create the lightbox overlay function to show the movie information

$('body').on('click', 'img', function(event) {
event.preventDefault();
    
console.log('clicked!'); 
// get the data needed from the clicked movie to show on the overlay $(this).attr('alt') targets the movie clicked so that only information from this movie is being retrieved.

var movieImage = $(this).attr('alt');
console.log(movieImage);
var movieURL = 'http://www.omdbapi.com/?';
var movieClicked = movieImage;
var movieOptions = {
t: movieClicked
  };


    

// filling in the movie data with the information from the API using a function.  As this is calling the clicked movie use data.something syntax as it is not looping through each item, as in the first function. Attach this to the variable created to store the information and then append it to the overlay to be displayed on the website.
    
function displayEachMovieData(data) {
   console.log(data); 

  var movieDataHTML = '<div id="container">';
       movieDataHTML += '<img ';
      movieDataHTML += 'src="' + data.Poster + '" ';
      movieDataHTML += 'alt="' + 'Title: ' + data.Title + '" >';
      movieDataHTML += '<ul>';
      movieDataHTML += '<li>';
      movieDataHTML += '<p>' + 'Title: ' + data.Title + '</p>';
      movieDataHTML += '</li>';
      movieDataHTML += '<li>';
      movieDataHTML += '<p>' + 'Year: ' + data.Year + '</p>';
      movieDataHTML += '</li>';
      movieDataHTML += '<li>';
      movieDataHTML += '<p>' + 'Director: ' + data.Director + '</p>';
      movieDataHTML += '</li>';
      movieDataHTML += '<li>';
      movieDataHTML += '<p>' + 'Rated: ' + data.Rated + '</p>';
      movieDataHTML += '</li>';
      movieDataHTML += '<li>';
      movieDataHTML += '<p>' + 'Released: ' + data.Released + '</p>';
      movieDataHTML += '</li>';
      movieDataHTML += '<li>';
      movieDataHTML += '<p>' + 'Genre: ' + data.Genre + '</p>';
      movieDataHTML += '</li>';
      movieDataHTML += '<li>';
      movieDataHTML += '<p>' + 'Plot: ' + data.Plot + '</p>';
      movieDataHTML += '</li>';
      movieDataHTML += '</ul>';
      movieDataHTML += '<p id="closeButton">X</p>';
      movieDataHTML += '</div>';

// creating the overlay for the movie data to be put into
    
var $overlay = '<div class="overlayLB"></div>';
var $movieOverlay = $($overlay).append(movieDataHTML);
// Append the overlay together to create it
    
 $('#movieInformation').append($movieOverlay);
    
} // close displayEachMovieData
    
$.getJSON(movieURL, movieOptions, displayEachMovieData);// end getJSON  
        
});// end click function on image


// create a click funtion to close the overlay on close button click

$(document).on('click', '#closeButton', function(event) {
event.preventDefault;

console.log('last click');

$('.overlayLB').fadeOut();
    
}); // end last click function for overlay to fadeout