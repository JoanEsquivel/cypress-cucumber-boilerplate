import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../pages/LoginPage");

Given("A user opens a saucelabs website", () => {
  cy.visit("/");
});
When("A user enters the username {string}", (username) => {
  loginPage.typeUsername(username);
});
When("A user provides incorrect credentials", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.typeUsername(row.username);
    loginPage.typePassword(row.password);
  });
});
And("A user enters the password {string}", (password) => {
  loginPage.typePassword(password);
});
And("A user clicks on the login button", () => {
  loginPage.clickLogin();
});
Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});
Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
