describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays first project", () => {
    cy.get("#project-1").within(() => {
      cy.get("#.image").should("exist");
      cy.get("#.ui.header").should("contain", "My First Website");
      cy.get("#.description").should("contain, This was my first project. The guy lost, but won the popular vote!");
    });
});

  it("displays second project", () => {
    cy.get("#project-2").within(() => {
      cy.get("#.image").should("exist");
      cy.get("#.ui.header").should("contain", "UI Design");
      cy.get("#.description").should("contain", "Designing user interface is fun. want to learn more.");
    });
  })
  it("displays third project", () => {
     cy.get("#project-3").within(() => {
      cy.get("#.image").should("exist");
      cy.get("#.ui.header").should("contain", "Mobile UX");
      cy.get("#.description").should("contain", "I like to design mobile platforms.");
    });
  });
  });
