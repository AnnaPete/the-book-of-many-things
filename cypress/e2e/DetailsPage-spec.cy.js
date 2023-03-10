describe('Details spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/races/details')
  })

  it('should display images above the description', () => {
    cy.get('img')
    .should('exist')
    .should('be.visible')
  })

  it('should have a section that displays the title', () => {
    cy.get('h1')
      .should('exist')
      .should('be.visible')
  })

  it('should display the details underneath the title', () => {
    cy.get('p')
      .should('exist')
      .should('be.visible')
  })

  it('should redirect to the homepage in the event of a bad url', () => {
    cy.visit('http://localhost:3000/classes/det')
      .url()
      .should('eq', 'http://localhost:3000/')
  })
})