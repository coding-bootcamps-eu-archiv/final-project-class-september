// https://docs.cypress.io/api/table-of-contentss

describe("Admin-Delete", () => {
  it("Visits the Admin page and delete a entry", () => {
    cy.visit("/admin");
    cy.get(":nth-child(1) > .options-style > .btn-delete").click();
  });
});
