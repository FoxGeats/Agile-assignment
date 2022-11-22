
  
  Cypress.Commands.add('checkMoviesExist', (index, title) => {
  
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
  
    cy.get(".MuiCardHeader-content")
      .eq(index)
      .find("p")
      .contains(title);
  });
  
  Cypress.Commands.add('pagination', (index) => {
  
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
  
    cy.get(".MuiPaginationItem-root").eq(index).contains(3).click();
  });

  Cypress.Commands.add('checkRedHeartExists', (index) => {
  
    Cypress.on('fail', (error, runnable) => {
  
      if (!error.message.includes("button[aria-label='add to favorites']")) {
  
        throw error
  
      }
  
    })
  
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
  
    cy.get(".MuiCardHeader-root").eq(index).find("svg").should("not.exist");
    cy.get("button[aria-label='add to favorites']").eq(index).click();
    cy.get(".MuiCardHeader-root").eq(index).find("svg");
  });

  Cypress.Commands.add('addToFavourites', (index) => {
  
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
  
    cy.get("button[aria-label='add to favorites']").eq(index).click();
  });
  
  Cypress.Commands.add('clickReviewButton', (index) => {
  
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
  
    Cypress.on('fail', (error, runnable) => {
  
      if (!error.message.includes("svg[data-testid='RateReviewIcon'")) {
  
        throw error
  
      }
  
    })
    cy.get("svg[data-testid='RateReviewIcon'").eq(index).click();
  });
  
  Cypress.Commands.add('addReview', (name, reviewContent) => {
  
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
  
    cy.get("#author").clear().type(name);
    cy.get("#review").clear().type(reviewContent);
    cy.get("#select-rating").click();
  
    cy.contains('Excellent').click()
  
    cy.get(".MuiButtonBase-root").contains("Submit").click();
  
    cy.get("svg[data-testid='CloseIcon'").click();
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