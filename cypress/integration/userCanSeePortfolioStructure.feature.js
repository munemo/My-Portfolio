describe('Portfolio interface', () => {
  it('Successfully renders', () => {
    cy.visit("http://localhost:3000")
    cy.get("#header").should("contain", "My Portfolio")
    cy.get("#footer").should("contain", "Made in React 16.13.1")
    cy.get("#hello").should("contain", "Hello World")
  })
})