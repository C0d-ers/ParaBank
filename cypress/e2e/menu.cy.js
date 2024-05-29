import MenuPage from "../pages/menu-page.spec";

describe("Test", () => {
  beforeEach(() => {
    cy.login("john_doe12", "Password123");
    cy.visit("/");
  });
  afterEach(() => {});
  it("Verify Left Side menu ", () => {
    MenuPage.checkLeftPanelMenuItems();
  });

  it("Verify Open New Account Menu", () => {
    MenuPage.clickOpenNewAccount();
    MenuPage.verifyOpenNewAccountMenu();
  });
  it("Verify Account Overview Menu", () => {
    MenuPage.clickAccountsOverview();
    MenuPage.verifyAccountOverviewMenu();
  });

  it("Verify Transferfund Menu", () => {
    MenuPage.clickTransferFunds();
    MenuPage.verifyTransferFundsMenu();
  });

  it("Verify Bill Pay Menu", () => {
    MenuPage.clickBillPay();
    MenuPage.verifyBillPayMenu();
  });

  it("Verify Find Transaction Menu", () => {
    MenuPage.clickFindTransactions();
    MenuPage.verifyFindTransactionsMenu();
  });

  it("Verify Update Contact Info Menu", () => {
    MenuPage.clickUpdateContactInfo();
    MenuPage.VerifyUpdateContactInfoMenu();
  });

  it("Verify Request Loan Menu", () => {
    MenuPage.clickRequestLoan();
    MenuPage.verifyRequestLoanMenu();
  });
});
