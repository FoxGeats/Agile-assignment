import '../support/commands'

let movies;

describe("The pagination feature", () => {
    before(() => {
        cy.request(
          `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=3`
        )
          .its("body")
          .then((response) => {
            movies = response.results;
          });
      });

describe("Changing to the second page of movies", () => {
    it("Navigating to the home page", () => {
        cy.visit("/");
      });
      
      it("Navigating to the second page", () => {
      cy.visit("/");
      cy.pagination(3);
    });

    it("Movies are listed on the second page", () => {
        cy.checkMoviesExist(1, movies[1].title);
       
      });
  });

});