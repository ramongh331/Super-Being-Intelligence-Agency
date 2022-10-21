// 1. Set up a state variable to store our movie data.
let superHeroData, itemSelect;

// variable for api key
const apiKey = "10221482092109391";

// variable for base url
const baseURL = "https://superheroapi.com/api.php/";

// Cache elements from DOM
const $heroName = $("#heroName");
const $heroID = $("#heroID");

// 6. Cache a reference to the input element from the DOM
const $input = $("#herosDropDown");

// 2. Set up an event listener for a 'submit' event from our form.
$("form").on("submit", handleGetData);

// 3. For best practices, we'll move the AJAX request to it's own function called handleGetData, this function will get called when the form is submitted thus fetching our data and assigning it to our movieData state variable.
function handleGetData(event) {
  //   event.preventDefault();

  // Assign the value from our input element ($input) to our state variable (userInput) and use that value ($input.val()) to modify the ajax request.
  itemSelect = $input.val("");

  $.ajax({
    url: `${baseURL}${apiKey}/${itemSelect}`,
  }).then(
    (data) => {
      superHeroData = data;
      render();
    },
    (error) => {
      console.log("bad request", error);
    }
  );
}

// 4. Create a seperate function called render transfer the data from our state variable (weatherData) to the DOM.
function render() {
  $heroName.text(`Name: ` + superHeroData.results[0].name);
  $heroID.text(`Id: ` + superHeroData.results[0].id);
  //   $feelsLike.text(`Feels Like: ` + weatherData.main.feels_like);
  //   $weather.text(`Weather: ` + weatherData.weather[0].description);
}
