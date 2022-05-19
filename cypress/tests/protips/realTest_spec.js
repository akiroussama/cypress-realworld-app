const isMobile = `${Cypress.env("mobile")}`;
const mobileDevice = `${Cypress.env("device")}`;
console.log("mobile device = " + isMobile);
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
  describe("mobile-tests", () => {
    beforeEach(() => {
      /*
        macbook-16, macbook-15, macbook-13, macbook-11,
       ipad-2, ipad-mini, iphone-xr, iphone-x, iphone-6+,
        iphone-se2, iphone-8, iphone-7, iphone-6, iphone-5,
         iphone-4, iphone-3, samsung-s10, samsung-note9
      */
      cy.viewport("iphone-5");
    });

    it(" Check the elements ", () => {
      cy.hey("signup").should("be.visible").should("contain", "Don't have an account? Sign Up");
    });
  });
});
