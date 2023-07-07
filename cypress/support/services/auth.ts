class Auth {

  login(username: string, password: string) {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/login",
      body: {
        password: password,
        type: "LOGIN",
        username: username
      }
    }).as("login")

    return cy.get("@login")
  }

}


export const auth = new Auth();