describe('Portfolio interface', () => {
  it('Successfully renders', () => {
    cy.visit("http://localhost:3000")
    cy.get("#header").should("contain", "My Portfolio")
    cy.get("#footer").should("contain", "Made by John Chimbani")
    
  })
})