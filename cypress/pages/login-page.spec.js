class LoginPage {
  // Element locators
  locators = {
    usernameField: "input[name='username']",
    passwordField: "input[name='password']",
    loginButton: "input[value='Log In']",
    errorPanel: "#rightPanel",
    accountsOverview: "#showOverview",
    tfoot: "tfoot",
  };

  // Actions
  visit() {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
  }

  enterUsername(username) {
    cy.get(this.locators.usernameField).type(username);
  }

  enterPassword(password) {
    cy.get(this.locators.passwordField).type(password);
  }

  clickLogin() {
    cy.get(this.locators.loginButton).click();
  }

  checkErrorPanel() {
    cy.get(this.locators.errorPanel).should(
      "contain.text",
      "Username or Passcode not matched."
    );
  }

  checkLoginSuccess() {
    cy.get(this.locators.accountsOverview).should(
      "contain.text",
      "Accounts Overview"
    );
    cy.get(this.locators.tfoot).should(
      "contain.text",
      "*Balance includes deposits that may be subject to holds"
    );
  }

  checkEmptyCredentialMessage() {
    cy.get(this.locators.errorPanel).should(
      "contain.text",
      "Please enter a username and password."
    );
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();
