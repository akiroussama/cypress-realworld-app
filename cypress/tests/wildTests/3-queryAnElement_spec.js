describe(" Query an element ", () => {
  it(" Check the button title && the checkbox ", () => {
    cy.visit("/");
    cy.get('[data-test="signup"]').should("contain", "Sign Up");
    cy.get('[data-test="signin-remember-me"]')
      .should("be.visible") // Passes
      .click();
  });
});
