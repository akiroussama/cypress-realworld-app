it("let me debug like a fiend", () => {
  cy.visit("/");
  cy.get("#username").debug();
});
it("Take a break", () => {
  cy.pause();
  cy.getBySel("signup").click();
  // more commands
  // Snopshot after the click event (before the redirect)
  /* ==== Generated with Cypress Studio ==== */
  cy.get("#firstName").clear();
  cy.get("#firstName").type("hello");
  cy.get("#lastName").clear();
  cy.get("#lastName").type("wilders");
  cy.get("#username").clear();
  cy.get("#username").type("wild007");
  cy.get("#password").clear();
  cy.get("#password").type("AAAA");
  cy.get("#confirmPassword").clear();
  cy.get("#confirmPassword").type("AAAA");
  /* ==== End Cypress Studio ==== */
  // A montrer: time travel et pinned snapshots
});
