const apiGraphQL = `${Cypress.env("apiUrl")}/graphql`;

describe("Bank Accounts", function () {
  beforeEach(function () {
    cy.task("db:seed");

    cy.intercept("GET", "/notifications").as("getNotifications");

    cy.intercept("POST", apiGraphQL, (req) => {
      const { body } = req;

      if (body.hasOwnProperty("operationName") && body.operationName === "ListBankAccount") {
        req.alias = "gqlListBankAccountQuery";
      }

      if (body.hasOwnProperty("operationName") && body.operationName === "DeleteBankAccount") {
        req.alias = "gqlDeleteBankAccountMutation";
      }
    });
  });

  it("soft deletes a bank account", function () {
    cy.visit("/bankaccounts");
    cy.getBySelLike("delete").first().click();

    cy.wait("@gqlDeleteBankAccountMutation");
    cy.getBySelLike("list-item").children().contains("Deleted");
  });

  // TODO: [enhancement] the onboarding modal assertion can be removed after adding "onboarded" flag to user profile
  it("renders an empty bank account list state with onboarding modal", function () {
    cy.visit("/bankaccounts");
    cy.wait("@getNotifications");
    cy.wait("@gqlListBankAccountQuery");

    cy.getBySel("bankaccount-list").should("not.exist");
    cy.getBySel("empty-list-header").should("contain", "No Bank Accounts");
    cy.getBySel("user-onboarding-dialog").should("be.visible");
    cy.getBySel("nav-top-notifications-count").should("exist");
  });
});
