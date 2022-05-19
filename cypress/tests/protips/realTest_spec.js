describe("Notre premier vrai test", () => {
  it(" Open the app", () => {
    cy.visit("http://localhost:3000/");
  });
  it(" Check the location", () => {
    cy.location("pathname").should("equal", "/signin");
  });
  it(" Check the elements ", () => {
    cy.hey("signup").should("contain", "Sign Up");
    cy.hey("signin-remember-me")
      .should("be.visible") // Passes
      .click();
  });
});
