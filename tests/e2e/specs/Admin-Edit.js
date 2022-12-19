// https://docs.cypress.io/api/table-of-contentss
describe("Admin-edit", () => {
  it("Visits the Admin page and edit an entry", () => {
    cy.visit("/admin");
    cy.get(":nth-child(1) > .options-style > a > .btn-edit > .bi > path");
    cy.get(":nth-child(1) > .options-style > a > .btn-edit > .bi").click();
    cy.wait(2000);
    cy.get("#title").clear();
    cy.wait(2000);
    cy.get("#title").type("I'm a e2e test");
    cy.get("#dropdown").select("vacancy");
    cy.get("#url").clear();
    cy.get("#url").type("https://docs.cypress.io/api/commands/clear#Syntax");
    cy.get("button.width-400").click();
  });
});
