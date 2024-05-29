import RegistrationPage from "../pages/resgistration-page.spec";
const neatCSV = require("neat-csv");

describe("Verify Different Registration Scenario", () => {
  it.skip("Verify Valid Registration", () => {
    cy.fixture("NewUser_Registration.csv")
      .then(neatCSV) //convert CSV into object
      .then((table) => {
        table.forEach((row, index) => {
          cy.log(`Running test case ${index + 1}`);
          RegistrationPage.visit();
          RegistrationPage.clickRegisterLink();
          RegistrationPage.fillRegistrationForm(
            row.firstName,
            row.lastName,
            row.streetAddress,
            row.city,
            row.state,
            row.zipCode,
            row.phoneNumber,
            row.ssn,
            row.username,
            row.password,
            row.repeatedPassword
          );
          RegistrationPage.submitRegistration();
          RegistrationPage.checkSuccessMessage(row.username);
          RegistrationPage.clickLogoutButton();
        });
      });
  });
  it("Verify Registration with existing Username", () => {
    cy.fixture("ExistingUser_Registration.csv")
      .then(neatCSV) //convert CSV into object
      .then((table) => {
        table.forEach((row, index) => {
          cy.visit("/");
          cy.log(`Running test case ${index + 1}`);
          RegistrationPage.visit();
          RegistrationPage.clickRegisterLink();
          RegistrationPage.fillRegistrationForm(
            row.firstName,
            row.lastName,
            row.streetAddress,
            row.city,
            row.state,
            row.zipCode,
            row.phoneNumber,
            row.ssn,
            row.username,
            row.password,
            row.repeatedPassword
          );
          RegistrationPage.submitRegistration();
          RegistrationPage.checkUsernameError();
        });
      });
  });
  it("Verify Registration with different passcode", () => {
    cy.fixture("DifferentPasscode_Registration.csv")
      .then(neatCSV) //convert CSV into object
      .then((table) => {
        table.forEach((row, index) => {
          cy.log(`Running test case ${index + 1}`);
          RegistrationPage.visit();
          RegistrationPage.clickRegisterLink();
          RegistrationPage.fillRegistrationForm(
            row.firstName,
            row.lastName,
            row.streetAddress,
            row.city,
            row.state,
            row.zipCode,
            row.phoneNumber,
            row.ssn,
            row.username,
            row.password,
            row.repeatedPassword
          );
          RegistrationPage.submitRegistration();
          RegistrationPage.unmatchedPasscodeError();
          cy.visit("/");
        });
      });
  });
});
