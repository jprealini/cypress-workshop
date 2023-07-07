import {loginPage} from "../pages/loginPage"

describe("Login Page Pre-Login Validations", () => {

    beforeEach(() => {
      cy.visit("/signin")
    });

    it("Special Characters in Username", () => {
      loginPage.fillInLoginFields("$%&/()", "password")
      cy.get("#username").should("have.class","MuiOutlinedInput-input")
    })

})