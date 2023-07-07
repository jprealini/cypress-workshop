describe("Login Page", () => {

  context('Valid Login', () => {

    beforeEach(() => {
      cy.login("Tavares_Barrows", "s3cret")
    });

    it("Valid Login", () => {
      cy.dataTest("app-name-logo").should("be.visible")
    })
  });

  context('Invalid Login', () => {
    beforeEach(() => {
      cy.login("jp", "password")
    });

    it("Invalid Login", () => {
      cy.dataTest("signin-error").should("be.visible")
    })
  });


})


