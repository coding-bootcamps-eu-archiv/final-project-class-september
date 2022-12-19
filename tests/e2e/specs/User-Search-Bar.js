describe("Admin-edit", () => {
  it("Visits the Admin page and edit an entry", () => {
    cy.visit("/public");
    cy.get("#search-input").type("CBE");
    cy.get(".backg").click();
  });
});
