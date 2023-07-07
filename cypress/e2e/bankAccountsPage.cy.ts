import {loginPage} from "../pages/loginPage"

describe("Bank Accounts Page", () => {

    beforeEach(() => {
      cy.login("User", "password")
    });

    it("Special Characters in Username", () => {      
      loginPage.fillInLoginFields("$%&/()", "password")      
      cy.get("#username").should("have.class","MuiOutlinedInput-input")
    })

    it("Special Characters in Username", () => {
      loginPage.fillInLoginFields("$%&/()", "password")
      cy.get("#username").should("have.class","MuiOutlinedInput-input")
    })

    it("Special Characters in Username", () => {
      loginPage.fillInLoginFields("$%&/()", "password")
      cy.get("#username").should("have.class","MuiOutlinedInput-input")
    })

    it("Special Characters in Username", () => {
      loginPage.fillInLoginFields("$%&/()", "password")
      cy.get("#username").should("have.class","MuiOutlinedInput-input")
    })

    // + 200 tests

})