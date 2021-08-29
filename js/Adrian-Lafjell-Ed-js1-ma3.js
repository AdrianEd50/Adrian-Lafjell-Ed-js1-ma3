//Question 1

//Convert the function below to an arrow function:

const getRemainder = (a, b) => a % b;

//Question 2

//Make a call to the Rawg API.

//Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to.
//You can use https://noroff.no for the URL and Noroff Assignment for the description.

//You'll be given an API Key you can add as a "key" parameter in your fetch request.

//Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
//https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

//Loop through the results and display the following properties in HTML, but only for the first eight results:
//name
//rating
//number of tags (not the tag details, just the amount of tags)
//The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

//Be sure to handle any potential errors in the code.

//You can use either regular promise or async/await syntax to make the call.

//Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=d5bc93a509464ccd9b0e2b7c45c6b0c4";

const resultContainer = document.querySelector(".result");

async function getApi() {
  const response = await fetch(url);

  const games = await response.json();
  console.log(games);

  for (let i = 0; i < games.results.length; i++) {
    console.log(games.results[i]);

    if (i === 8) {
      break;
    }

    resultContainer.innerHTML += `<div class ="result">${games.results[i].name}, ${games.results[i].rating}</div>`;
  }
}

getApi();

// The list of tags on the API is 5, the API has 5 tags, (0-4).
