import { Given, When, Then,And,} from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage'

Given("A web browser is at the CTP Home page - Repay demo", () => {
  cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button - Repay demo", (username,password) => {
  loginPage.submitLogin(username,password)
});

// When("A user provides incorrect credentials, and clicks on the login button - Repay demo", (table) => {
//   table.hashes().forEach((row) => {
//     cy.log(row.username);
//     cy.log(row.password);
//     loginPage.submitLogin(row.username, row.password)

//   });

Then("User clicks on Menu button", () => {
  loginPage.clicksMenu();
  cy.wait(1000);
});

Then("click on Instance Management",() => {
  loginPage.clickOnInstanceManagement();
});

Then("click on Add a new Instance",() => {
  loginPage.clickOnAddNewInstance();
  cy.wait(1000);

});

Then("Enter the name {string}, the software {string}, and click on Add button",(name,software) =>{
   loginPage.createNewInstance(name,software);
  
});

Then("Verify the success message is displayed {string}",(successMessage) => {
   loginPage.elements.successMessage().should("have.text", 'The instance was created successfully.');

})
// Then("The error message {string} is displayed - Repay demo", (errorMessage) => {
//   loginPage.elements.errorMessage().should("have.text", errorMessage);
