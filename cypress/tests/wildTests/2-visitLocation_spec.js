describe(" Visit the app ", () => {
  it(" Open the app", () => {
    cy.visit("/"); // https://localhost:3000/ is the default baseUrl inside cypress.json
  });
  it(" Check the location", () => {
    cy.location("pathname").should("equal", "/signin");
  });
});
