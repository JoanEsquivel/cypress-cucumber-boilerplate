import {
  Given,
  When,
  Then,
  And,should,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

Given("A web browser is at the CTP login page", () => {
  cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
  
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)

  });
});

Then("Verify the Title of the Page as {string}", (string) => {
  cy.title().should("eq", "Dashboard - ClickToPay");
});

Then("Verify the url of the page as {string}", (string) => {
  cy.url().should('include',"aps-clicktopay.uat.repay.net");
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
