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
    cy.visit("/");
    cy.hey("signup").should("be.visible").should("contain", "Don't have an account? Sign Up");
    // fail test by update the sign up text
  });
});
/*
 mobile => cypress
 yarn cypress:open:mobile
*/
