class ForgotLoginInfoPage {
  // Element locators
  locators = {
    forgotLoginLink: "#loginPanel > :nth-child(2) > a",
    firstNameField: "#firstName",
    lastNameField: "#lastName",
    streetAddressField: '[id="address\\.street"]',
    cityField: '[id="address\\.city"]',
    stateField: '[id="address\\.state"]',
    zipCodeField: '[id="address\\.zipCode"]',
    ssnField: "#ssn",
    findLoginInfoButton: "input[value='Find My Login Info']",
    rightPanel: "#rightPanel",
  };

  // Actions
  clickForgotLoginLink() {
    cy.get(this.locators.forgotLoginLink).click();
  }

  enterFirstName(firstName) {
    cy.get(this.locators.firstNameField).click().type(firstName);
  }

  enterLastName(lastName) {
    cy.get(this.locators.lastNameField).click().type(lastName);
  }

  enterStreetAddress(streetAddress) {
    cy.get(this.locators.streetAddressField).click().type(streetAddress);
  }

  enterCity(city) {
    cy.get(this.locators.cityField).click().type(city);
  }

  enterState(state) {
    cy.get(this.locators.stateField).click().type(state);
  }

  enterZipCode(zipCode) {
    cy.get(this.locators.zipCodeField).click().type(zipCode);
  }

  enterSSN(ssn) {
    cy.get(this.locators.ssnField).click().type(ssn);
  }

  clickFindLoginInfoButton() {
    cy.get(this.locators.findLoginInfoButton).click();
  }

  // Assertion
  checkIncorrectDetailsMessage() {
    cy.get(this.locators.rightPanel).should("contain.text", "The customer information provided could not be found.");
  }

  checkSuccessMessage() {
    cy.get(this.locators.rightPanel).should("contain.text", "Check your email to reset passcode");
  }


  // Forgot Login Info Flow
  forgotLoginInfo(
    firstName,
    lastName,
    streetAddress,
    city,
    state,
    zipCode,
    ssn
  ) {
    this.clickForgotLoginLink();
    this.enterFirstName(firstName);
    this.enterLastName(lastName);
    this.enterStreetAddress(streetAddress);
    this.enterCity(city);
    this.enterState(state);
    this.enterZipCode(zipCode);
    this.enterSSN(ssn);
    this.clickFindLoginInfoButton();
  }
}

export default new ForgotLoginInfoPage();
