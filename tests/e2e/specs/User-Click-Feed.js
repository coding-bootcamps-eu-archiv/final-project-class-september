describe("Admin-edit", () => {
  it("Visits the Admin page and edit an entry", () => {
    cy.visit("/public");
    cy.get(":nth-child(1) > :nth-child(2) > .title > h2 > .story-link").click();
    cy.get(":nth-child(2) > :nth-child(2) > .title > h2 > .story-link").click();
  });
});
