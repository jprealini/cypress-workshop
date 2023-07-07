import { bankAccountsPage } from "../pages/bankAccountsPage";
let users = require("../fixtures/users.json")

describe.each(users)(`Bank Accounts Page with API Login for user`, (user: User) => {

  console.log(JSON.stringify(user))

  beforeEach(() => {
    cy.session("apiLogin", () => {
      console.log(user)
      cy.apiLogin(user.username, user.password)
    })
    cy.visit("/bankaccounts")
  });

  it(`Special Characters in Username ${user.username}`, () => {
    bankAccountsPage.getPaneTitle().should("exist")
  })
  

  afterEach(() => {
    Cypress.session.clearAllSavedSessions() 
  })

})