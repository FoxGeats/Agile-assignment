let actors; // List of movies from TMDB
let actor; //
let credit;

describe("actor tests", () => {
  before(() => {
    // Get the discover movies from TMDB and store them locally.
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body") // Take the body of HTTP response from TMDB
      .then((response) => {
        actors = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/movies/people");
  });

  describe("The actors page", () => {
    it("displays the page header and 20 actors", () => {
      cy.get("h3").contains("People");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
      
    });
    

    it("displays the correct actor name", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(actors[index].name);
      });
    });
  });
  describe("The actor details page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/person/${
          actors[2].id
        }?api_key=${Cypress.env("TMDB_KEY")}`
      )
        .its("body")
        .then((personDetails) => {
          actor = personDetails;
        });

        cy.request(
          `https://api.themoviedb.org/3/person/${
            actors[2].id
          }/movie_credits?api_key=${Cypress.env("TMDB_KEY")}&language=en-US`
        )
          .its("body")
          .then((c) => {
            credit = c;
          });
    });
    beforeEach(() => {
        cy.visit(`/persons/${actors[2].id}`);
      });
   
    it(" displays the actor name and biography ", () => {
     
        cy.get("h3").contains(actor.name);
            cy.get("p").contains("Biography");
   cy.get("p").next().contains(actor.biography);
   
    });
    it(" displays the actor known for list and navigate to movie page ", () => {
     
      cy.get(".MuiSvgIcon-root").eq(0).click()
      cy.url().should("include", `/movies/${credit.cast[0].id}`);
 
  });
  });
});