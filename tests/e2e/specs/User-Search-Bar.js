// https://docs.cypress.io/api/table-of-contents
describe("User-search-Bar", () => {
  it("Visits the Public page and search a Feed", () => {
    cy.visit("/public");
    cy.get("#search-input").type("CBE");
    cy.get(".backg").click();
  });
});
