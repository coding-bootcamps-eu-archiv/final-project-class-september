// https://docs.cypress.io/api/table-of-contents
describe("User-add Suggestions", () => {
  it("Visits the Public page and add sugesstions", () => {
    cy.visit("/public");
    cy.get(".create").click();
    cy.get("#title").type("We are the Champions");
    cy.get("#dropdown").select("youtube");
    cy.get("#url").type("https://www.youtube.com/watch?v=04854XqcfCY");
    cy.get("button.width-400").click();
  });
});
