class LoginPage {

  // Definir locators

  #elements = {
    userNameTxt: () => cy.get("#username"),
    passwordTxt: () => cy.get("#password"),
    signinBtn: () => cy.dataTest("signin-submit"),
    remembermeChk: () => cy.get("input[name=remember]")
  }


  // Definir metodos o acciones
  typeUserName(name) {
    this.#elements.userNameTxt().type(name)
  }

  typePassword(password) {
    this.#elements.passwordTxt().type(password)
  }

  clickSignIn() {
    this.#elements.signinBtn().click()
  }

  clickRemember() {
    this.#elements.remembermeChk().check()
  }

  fillInLoginFields(username, password) {
    this.typeUserName(username)
    this.typePassword(password)
  }
}

export const loginPage = new LoginPage();