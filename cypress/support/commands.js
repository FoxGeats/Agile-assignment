
  
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