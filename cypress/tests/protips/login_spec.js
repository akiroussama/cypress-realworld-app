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

  describe("getstarted", () => {
    it("tests getstarted", () => {
      cy.get("#bankaccount-bankName-input").click();

      cy.get("#bankaccount-bankName-input").type("proaccount");

      cy.get("#bankaccount-routingNumber-input").type("AZER12333");

      cy.get("#bankaccount-accountNumber-input").type("123123123");

      cy.get("[data-test=bankaccount-submit] > span.MuiButton-label").click();

      cy.get("[data-test=user-onboarding-next] > span.MuiButton-label").click();

      cy.get("[data-test=sidenav-bankaccounts] > div.MuiListItemText-root > span").click();

      cy.get("[data-test=sidenav-notifications] > div.MuiListItemText-root > span").click();
    });
  });
});
