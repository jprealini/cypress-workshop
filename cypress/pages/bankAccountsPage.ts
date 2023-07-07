class BankAccountsPage {

  #elements = {
    mainPaneTitle: () => cy.get("h2").contains("Bank Accounts"),
  }

  getPaneTitle() {
    return this.#elements.mainPaneTitle();
  }
}

export const bankAccountsPage = new BankAccountsPage()