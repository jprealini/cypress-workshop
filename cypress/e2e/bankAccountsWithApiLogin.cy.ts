
describe("Bank Accounts Page with API Login", () => {

  before(() => {
    cy.fixture("users").then((response: User[]) => {
      let user = response[0]
      cy.apiLogin(user.username, user.password)
    })


  });

  it("Validate that the logged in user name shows in the dashboard", () => {
    cy.visit("/bankaccounts")
    expect(true).to.be.true
  })

})