describe("Notre premier vrai test", () => {
  it(" Open the app", () => {
    cy.visit("http://localhost:3000/");
  });
  it(" Check the location", () => {
    cy.location("pathname").should("equal", "/signin");
  });
  it("should redirect unauthenticated user to signin page", function () {
    cy.visit("/personal");
    cy.location("pathname").should("equal", "/signin");
    cy.visualSnapshot("Redirect to SignIn");
  });

  it(" Check the elements ", () => {
    cy.hey("signup").should("contain", "Sign Up");
    cy.hey("signin-remember-me")
      .should("be.visible") // Passes
      .click();

    /* ==== Generated with Cypress Studio ==== */
    cy.get("#username").clear();
    cy.get("#username").type("wilder");
    cy.get("#password").clear();
    cy.get("#password").type("1234");
    /* ==== End Cypress Studio ==== */
    cy.hey("signin-submit").should("be.visible").click();
    cy.get('[data-test="signin-error"]').should("be.visible");
  });

  it(" signup ", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="signup"]').click();
    cy.get("#firstName").clear();
    cy.get("#firstName").type("test");
    cy.get("#lastName").clear();
    cy.get("#lastName").type("cypress");
    cy.get("#username").clear();
    cy.get("#username").type("studio");
    cy.get("#password").clear();
    cy.get("#password").type("aaaa");
    cy.get("#confirmPassword").clear();
    cy.get("#confirmPassword").type("aaaa");
    cy.get(".MuiButton-label").click();
    /* ==== End Cypress Studio ==== */
  });

  it(" login ", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#username").clear();
    cy.get("#username").type("studio");
    cy.get("#password").clear();
    cy.get("#password").type("aaaa");
    /* ==== End Cypress Studio ==== */
    cy.hey("signin-submit").should("be.visible").click();
  });

  // describe("mobile-tests", () => {
  //   beforeEach(() => {
  //     /*
  //       macbook-16, macbook-15, macbook-13, macbook-11,
  //      ipad-2, ipad-mini, iphone-xr, iphone-x, iphone-6+,
  //       iphone-se2, iphone-8, iphone-7, iphone-6, iphone-5,
  //        iphone-4, iphone-3, samsung-s10, samsung-note9
  //     */
  //     cy.viewport("iphone-5");
  //   });

  //   it(" Check the elements ", () => {
  //     cy.hey("signup").should("be.visible").should("contain", "Don't have an account? Sign Up");
  //   });
  // });
});
