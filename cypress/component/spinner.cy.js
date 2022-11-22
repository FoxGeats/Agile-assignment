import Spinner from "../../src/components/spinner"

describe('spinner.cy.js', () => {
  it('added correctly', () => {
    cy.mount(<Spinner />)
  });
})