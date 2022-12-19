// https://docs.cypress.io/api/table-of-contents

describe("Admin-create", () => {
  it("Visits the Admin page and create a new entry", () => {
    cy.visit("/admin");
    cy.contains("button", "+ create");
    cy.get(".create").click();
    cy.get("#title").type("Cypress Test");
    cy.get("#dropdown").select("event");
    cy.get("#url").type("https://www.facebook.com/codingbootcamps.eu");
    cy.get("button.width-400").click();
    cy.wait(2000);
    cy.contains("tbody > :nth-child(1) > :nth-child(1)", "Cypress Test");
    cy.get(":nth-child(1) > .options-style > .btn-delete").click();
    cy.get("tbody > :nth-child(1) > :nth-child(1)").should(
      "not.contain",
      "Cypress Test"
    );
  });
});
