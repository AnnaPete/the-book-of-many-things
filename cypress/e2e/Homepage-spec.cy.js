describe('Homepage spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a greeting message', () => {
    cy.get('.greeting')
      .should('exist')
      .should('be.visible')
  })

  it('should have an introduction section', () => {
    cy.get('.intro')
      .should('exist')
      .should('be.visible')
  })

  it('should have an opening tagline', () => {
    cy.get('.intro h3')
      .should('exist')
      .should('be.visible')
  })

  it('should have a description beneath the tagline', () => {
    cy.get('.intro p')
      .should('exist')
      .should('be.visible')
  })

  it('should have a picture next to the introduction text', () => {
    cy.get('img')
    .should('exist')
    .should('be.visible')
  })
})