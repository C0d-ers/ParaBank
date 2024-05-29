import RegistrationPage from "../pages/resgistration-page.spec";
import LoginPage from "../pages/login-page.spec";

describe("Test", () => {
  it("Verify Valid Login", () => {
    RegistrationPage.visit();
    LoginPage.login("noha_doe910", "Password123");
    LoginPage.checkLoginSuccess();
  });
  it("Verify Login with invalid credentials", () => {
    RegistrationPage.visit();
    LoginPage.login("No_doe12", "Password@123");
    LoginPage.checkErrorPanel();
  });
  it("verify login with empty credentials", () => {
    RegistrationPage.visit();
    LoginPage.clickLogin();
    LoginPage.checkEmptyCredentialMessage();
  });
});
