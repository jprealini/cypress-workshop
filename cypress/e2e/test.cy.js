describe("Login Page", () => {

  context('Valid Login', () => {

    beforeEach(() => {
      cy.login("Tavares_Barrows", "s3cret")
    });

    it("Valid Login", () => {
      cy.get("[data-test=app-name-logo]").should("be.visible")
    })
  });

  context('Invalid Login', () => {
    beforeEach(() => {
      cy.login("jp", "password")
    });

    it("Invalid Login", () => {
      cy.get("[data-test=signin-error]").should("be.visible")
    })
  });


})


