class RegistrationPage {
  // Element locators
  locators = {
    firstNameField: '[id="customer\\.firstName"]',
    lastNameField: '[id="customer\\.lastName"]',
    streetAddressField: '[id="customer\\.address\\.street"]',
    cityField: '[id="customer\\.address\\.city"]',
    stateField: '[id="customer\\.address\\.state"]',
    zipCodeField: '[id="customer\\.address\\.zipCode"]',
    phoneNumberField: '[id="customer\\.phoneNumber"]',
    ssnField: '[id="customer\\.ssn"]',
    usernameField: '[id="customer\\.username"]',
    passwordField: '[id="customer\\.password"]',
    repeatedPasswordField: "#repeatedPassword",
    submitRegisterButton: "input[value='Register']",
    usernameErrorMessage: '[id="customer\\.username\\.errors"]',
    successMessage: "h1",
    rightPanelMessage: "#rightPanel",
    registerButton: "Register",
    passcodeErrorMessage: '[id="repeatedPassword\\.errors"]',
  };
  // Actions
  visit() {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  }

  clickRegisterLink() {
    cy.contains(this.locators.registerButton).click();
  }

  enterFirstName(firstName) {
    cy.get(this.locators.firstNameField).type(firstName);
  }

  enterLastName(lastName) {
    cy.get(this.locators.lastNameField).type(lastName);
  }

  enterStreetAddress(streetAddress) {
    cy.get(this.locators.streetAddressField).type(streetAddress);
  }

  enterCity(city) {
    cy.get(this.locators.cityField).type(city);
  }

  enterState(state) {
    cy.get(this.locators.stateField).type(state);
  }

  enterZipCode(zipCode) {
    cy.get(this.locators.zipCodeField).type(zipCode);
  }

  enterPhoneNumber(phoneNumber) {
    cy.get(this.locators.phoneNumberField).type(phoneNumber);
  }

  enterSSN(ssn) {
    cy.get(this.locators.ssnField).type(ssn);
  }

  enterUsername(username) {
    cy.get(this.locators.usernameField).clear().type(username);
  }

  enterPassword(password) {
    cy.get(this.locators.passwordField).clear().type(password);
  }

  enterRepeatedPassword(repeatedPassword) {
    cy.get(this.locators.repeatedPasswordField).clear().type(repeatedPassword);
  }

  submitRegistration() {
    cy.get(this.locators.submitRegisterButton).click();
  }

  checkUsernameError() {
    cy.get(this.locators.usernameErrorMessage).should(
      "contain.text",
      "This username already exists."
    );
  }

  //this is to logout user
  clickLogoutButton() {
    cy.get("a[href='logout.htm']").click();
  }

  checkSuccessMessage(username) {
    cy.get(this.locators.successMessage).should(
      "contain.text",
      "Welcome " + username
    );
    cy.get(this.locators.rightPanelMessage).should(
      "contain.text",
      "Your account was created successfully. You are now logged in."
    );
  }

  unmatchedPasscodeError() {
    cy.get(this.locators.passcodeErrorMessage).should(
      "contain.text",
      "Passwords did not match."
    );
  }

  fillRegistrationForm(
    firstName,
    lastName,
    streetAddress,
    city,
    state,
    zipCode,
    phoneNumber,
    ssn,
    username,
    password,
    repeatedPassword
  ) {
    this.enterFirstName(firstName);
    this.enterLastName(lastName);
    this.enterStreetAddress(streetAddress);
    this.enterCity(city);
    this.enterState(state);
    this.enterZipCode(zipCode);
    this.enterPhoneNumber(phoneNumber);
    this.enterSSN(ssn);
    this.enterUsername(username);
    this.enterPassword(password);
    this.enterRepeatedPassword(repeatedPassword);
  }
}

export default new RegistrationPage();
