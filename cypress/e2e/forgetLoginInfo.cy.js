import RegistrationPage from "../pages/resgistration-page.spec";
import ForgotLoginInfoPage from "../pages/forgetLoginInfo-page.spec";

describe("Verify Forgot Login Info", () => {
  it("Verify Forget Login Info with invalid details", () => {
    RegistrationPage.visit();
    
    // Perform forgot login info flow
    ForgotLoginInfoPage.forgotLoginInfo(
      "John",
      "Doe",
      "123 Main St",
      "Anytown",
      "California",
      "90210",
      "123456789"
    );

    // Assertion after performing the flow
    ForgotLoginInfoPage.checkIncorrectDetailsMessage();
  });
  it("Verify Forget Login Info with valid details", () => {
    RegistrationPage.visit();
    
    // Perform forgot login info flow
    ForgotLoginInfoPage.forgotLoginInfo(
      "John",
      "Doe",
      "123 Main St",
      "Anytown",
      "California",
      "90210",
      "123456789"
    );

    // Assertion after performing the flow
    ForgotLoginInfoPage.checkSuccessMessage();
  });
});
