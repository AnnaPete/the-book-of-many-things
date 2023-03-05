describe('Header spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a logo', () => {
    cy.get('.logo')
      .should('exist')
      .should('be.visible')
  })

  it('should have a title', () => {
    cy.get('.title')
      .should('exist')
      .should('be.visible')
  })

  it('should have links that take the user to other pages', () => {
    cy.get('a')
      .should('exist')
      .should('be.visible')
  })

  it('should take the user back to the homepage when the logo is clicked', () => {
    cy.visit('http://localhost:3000/rules')
    cy.get('.header').get('.logo')
      .click()
      .url()
      .should('include', '/')
  })
})