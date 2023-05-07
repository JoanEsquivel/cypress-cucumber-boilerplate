// import { should } from "chai";
// require('cypress-xpath');

class LoginPage {
  elements = {
    usernameInput: () => cy.get("#Email"),
    passwordInput: () => cy.get("#Password"),
    loginBtn: () => cy.get('.primary'),
    errorMessage: () => cy.get('li').should('have.text','Invalid login attempt.'),
    titleOfThePage: () => cy.title(),
    clickonMenu:() => cy.get('li > a > .fa'),
    clickinstamngmt:() => cy.get('.vertical > :nth-child(3) > a'),
    addnewinstnce:() => cy.get('.title-bar-left > .button > .fa'),
    nameInput: () => cy.get("#Name"),
    softwaredropdwn: () => cy.get('#Software').select('Acumatica').should('have.value','1'),
    addBtn: () => cy.xpath("//button[contains(@type,'submit') and text()='Add']"),
    successMessage: () => cy.xpath("/html/body/div[2]/div[1]/div[1]/div[2]/div"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username, password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  clicksMenu() {
    this.elements.clickonMenu().click();
  }

  clickOnInstanceManagement() {
    this.elements.clickinstamngmt().click();
  }

  clickOnAddNewInstance() {
    this.elements.addnewinstnce().click();
  }

  typeName(name) {
    this.elements.nameInput().type(name);
  }

  selectSoftware(software) {
    this.elements.softwaredropdwn(software);
  }

  clickOnAdd() {
    this.elements.addBtn().click();
  }

  createNewInstance(name, software) {
    this.elements.nameInput().type(name);
    this.elements.softwaredropdwn().select(software);
    this.elements.addBtn().click();
  }
}

export const loginPage = new LoginPage();
