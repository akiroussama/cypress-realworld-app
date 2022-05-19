describe(" Custom Command (data-test) ", () => {
  it(" Check the button title && the checkbox ", () => {
    cy.visit("/");
    // before
    //   cy.get('[data-test="signup"]').should("contain", "Sign Up");
    // after =>
    cy.hey("signup").should("contain", "Sign Up");
    cy.hey("signin-remember-me").should("be.visible");
  });
});
