describe("User-click-Feed", () => {
  it("Visits the Public page and click on a Feed", () => {
    cy.visit("/public");
    cy.get(":nth-child(1) > :nth-child(2) > .title > h2 > .story-link").click();
  });
});
