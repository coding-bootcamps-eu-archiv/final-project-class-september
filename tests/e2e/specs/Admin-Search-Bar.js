// https://docs.cypress.io/api/table-of-contents
describe("Admin-search-Bar", () => {
  it("Visits the Admin page and search a Feed", () => {
    cy.visit("/admin");
    cy.get("#search-input").type("CBE");
    cy.get(".backg").click();
  });
});
