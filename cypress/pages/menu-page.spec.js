class MenuPage {
  // Element locators
  locators = {
    leftPanel: "#leftPanel",
    openNewAccountLink: "a[href='openaccount.htm']",
    accountsOverviewLink: "a[href='overview.htm']",
    transferFundsLink: "a[href='transfer.htm']",
    billPayLink: "a[href='billpay.htm']",
    findTransactionsLink: "a[href='findtrans.htm']",
    updateContactInfoLink: "a[href='updateprofile.htm']",
    requestLoanLink: "a[href='requestloan.htm']",
    openAccountForm: "#openAccountForm > .title",
    tfoot: "tfoot",
    showForm: "#showForm",
    transferButton: "input[value='Transfer']",
    billPayForm: "#billpayForm",
    formContainer: "#formContainer",
    transactionForm: "#transactionForm",
    findTransactionButtonOne: "#findById",
    findTransactionButtonTwo: "#findByDate",
    findTransactionButtonThree: "#findByDate",
    findTransactionButtonFour: "#findByDate",
    updateProfileForm: "#updateProfileForm",
    updateProfileButton: "input[value='Update Profile']",
    rowgroup: '[role="rowgroup"]',
    firstNameField: '[id="customer\\.firstName"]',
    requestLoanForm: "#requestLoanForm",
    accountsOverview: "#showOverview",
    sendPaymentButton: "input[value='Send Payment']",
  };

  // Assertions for the side menu
  checkLeftPanelMenuItems() {
    cy.get(this.locators.leftPanel).should("contain.text", "Open New Account");
    cy.get(this.locators.leftPanel).should("contain.text", "Accounts Overview");
    cy.get(this.locators.leftPanel).should("contain.text", "Transfer Funds");
    cy.get(this.locators.leftPanel).should("contain.text", "Bill Pay");
    cy.get(this.locators.leftPanel).should("contain.text", "Find Transactions");
    cy.get(this.locators.leftPanel).should(
      "contain.text",
      "Update Contact Info"
    );
    cy.get(this.locators.leftPanel).should("contain.text", "Request Loan");
  }

  // Click menu
  clickOpenNewAccount() {
    cy.get(this.locators.openNewAccountLink).click();
  }

  //verify the content of that menu
  verifyOpenNewAccountMenu() {
    cy.get(this.locators.openAccountForm).should(
      "contain.text",
      "Open New Account"
    );
  }

  clickAccountsOverview() {
    cy.get(this.locators.accountsOverviewLink).click();
  }

  verifyAccountOverviewMenu() {
    cy.get(this.locators.accountsOverview).should(
      "contain.text",
      "Accounts Overview"
    );
    cy.get(this.locators.tfoot).should(
      "contain.text",
      "*Balance includes deposits that may be subject to holds"
    );
  }

  clickTransferFunds() {
    cy.get(this.locators.transferFundsLink).click();
  }

  verifyTransferFundsMenu() {
    cy.get(this.locators.showForm).should("contain.text", "Transfer Funds");
    cy.get(this.locators.transferButton).should("be.visible");
  }

  clickBillPay() {
    cy.get(this.locators.billPayLink).click();
  }

  verifyBillPayMenu() {
    cy.get(this.locators.billPayForm).should(
      "contain.text",
      "Bill Payment Service"
    );
    cy.get(this.locators.billPayForm).should(
      "contain.text",
      "Enter payee information"
    );
    cy.get(this.locators.sendPaymentButton).should("be.visible");
  }

  clickFindTransactions() {
    cy.get(this.locators.findTransactionsLink).click();
  }

  verifyFindTransactionsMenu() {
    cy.get(this.locators.formContainer).should(
      "contain.text",
      "Find Transactions"
    );
    cy.get(this.locators.transactionForm).should(
      "contain.text",
      "Select an account"
    );
    cy.get(this.locators.findTransactionButtonOne).should(
      "have.attr",
      "type",
      "submit"
    );
    cy.get(this.locators.findTransactionButtonTwo).should(
      "have.attr",
      "type",
      "submit"
    );
    cy.get(this.locators.findTransactionButtonThree).should(
      "have.attr",
      "type",
      "submit"
    );
    cy.get(this.locators.findTransactionButtonFour)
      .should("have.attr", "type", "submit")
      .and("be.visible");
  }

  clickUpdateContactInfo() {
    cy.get(this.locators.updateContactInfoLink).click();
  }
  VerifyUpdateContactInfoMenu() {
    cy.get(this.locators.updateProfileForm).should(
      "contain.text",
      "Update Profile"
    );
    cy.get(this.locators.updateProfileButton)
      .should("have.attr", "type", "button")
      .should("have.attr", "value", "Update Profile")
      .should("be.visible");
  }

  clickRequestLoan() {
    cy.get(this.locators.requestLoanLink).click();
  }
  verifyRequestLoanMenu() {
    cy.get(this.locators.requestLoanForm).should(
      "contain.text",
      "Apply for a Loan"
    );
  }
}

export default new MenuPage();
