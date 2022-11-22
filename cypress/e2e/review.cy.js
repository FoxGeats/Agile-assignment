import '../support/commands'

let movies;

describe("The review feature", () => {
    before(() => {
        cy.request(
          `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
          .its("body")
          .then((response) => {
            movies = response.results;
          });
      });

describe("Selecting favourite movies", () => {
    it("Favorited movies contain the red heart", () => {
      cy.visit("/");
      cy.checkRedHeartExists(1);
    });
  });

  describe("The favourites page", () => {
    beforeEach(() => {
      cy.addToFavourites(1);
      cy.addToFavourites(3);
      cy.clickButton("Favorites");
    });
    it("The favorited movies are listed.", () => {
      cy.checkMoviesLength(2);
      cy.checkMoviesExist(0, movies[1].title);
      cy.checkMoviesExist(1, movies[3].title);
    });
  });

  describe("The add review page", () => {
    it("navigates to the add review page & adds review", () => {
        cy.clickReviewButton(0);

        const name = "Shu Chen";
        const reviewContent = "I like this movie very much.";
         
        cy.addReview(name, reviewContent);
    });
  });
});

Cypress.Commands.add('clickButton', (label) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get('button').contains(label).click()
});

Cypress.Commands.add('checkMoviesLength', (number) => {
  
  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get(".MuiCardHeader-content").should("have.length", number);
});