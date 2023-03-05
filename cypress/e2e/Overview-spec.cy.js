describe('Overview spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/classes')
  })

  it('should have a title', () => {
    cy.get('h2')
      .should('exist')
      .should('be.visible')
  })
  it('should have a description', () => {
    cy.get('li')
      .should('exist')
      .should('be.visible')
      .should('have.length', 13)
  })
  it('should have a button that takes the user to another page when clicked', () => {
    cy.get('button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/classes/details')
  })

  it('should redirect to the homepage in the event of a bad url', () => {
    cy.visit('http://localhost:3000/clas')
      .url()
      .should('eq', 'http://localhost:3000/')
  })
})