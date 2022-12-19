// https://docs.cypress.io/api/table-of-contents

describe("Admin-create", () => {
  it("Visits the Admin page and create a new entry", () => {
    cy.visit("/admin");
    cy.contains("button", "+ create");
    cy.get(".create").click();
    cy.get("#title").type("Cypress Test");
    cy.get("#dropdown").select("event");
    cy.get("#url").type("https://docs.cypress.io/api/commands/clear#Syntax");
    cy.get("#checkbox1").click();
    cy.get("#checkbox2").click();
    cy.get("button.width-400").click();
  });
});
