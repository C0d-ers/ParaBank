const neatCSV = require("neat-csv");
describe("Verify Valid Registration for each user", () => {
  it(`Verify Valid Registration `, () => {
    let table;
    cy.fixture("CSVDetailsForRegistration.csv")
      .then(neatCSV) //convert CSV into object
      .then((data) => {
        table = data;
      })
      .then(console.table);
    table.forEach((row, index) => {
      cy.log(`Running test case ${index + 1}`);

      // Parse relevant data from each CSV row
      const firstName = row.firstName;
      const lastName = row.lastName;
      const streetAddress = row.streetAddress;
      const city = row.city;
      const state = row.state;
      const zipCode = row.zipCode;
      const phoneNumber = row.phoneNumber;
      const username = row.username;
      const password = row.password;
      const repeatedPassword = row.repeatedPassword;

      // Utilize Page Objects or commands for registration flow
      RegistrationPage.visit();
      RegistrationPage.clickRegisterLink();
      RegistrationPage.fillRegistrationForm(
        firstName,
        lastName,
        streetAddress,
        city,
        state,
        zipCode,
        phoneNumber,
        username,
        password,
        repeatedPassword
      );
      RegistrationPage.submitRegistration();
      RegistrationPage.checkSuccessMessage(username);
      RegistrationPage.clickLogoutButton();
    });
  });
});
