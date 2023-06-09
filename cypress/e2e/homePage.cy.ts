import { auth } from "../support/services/auth"

describe("Home Page", () => {

    beforeEach(() => {
      // UI LOGIN
      cy.session("userLogin", () => {
        cy.login(Cypress.env("testUserName"), "s3cret")
      })        

      // API LOGIN
        // auth.login(Cypress.env("testUserName"), "s3cret").then((response) => {
        //   /**
        //    * extraer fixture
        //    * reemplazar los bloques "user" con el user del response
        //    * reemplazar los bloques "event" con el payload del request
        //    * guardar ese objeto como una key authState en el localStorage
        //    */
        // })       
      
        cy.visit("/")
    });

    it.only("Validate that the logged in user name shows in the dashboard", () => {      
      cy.dataTest("sidenav-username").should("contain", Cypress.env("testUserName"))
    }) 

    it.only("Validate that the logged in user name shows in the dashboard", () => {
      cy.dataTest("sidenav-username").should("contain", Cypress.env("testUserName"))
    }) 

    it.only("Validate that the logged in user name shows in the dashboard", () => {
      cy.dataTest("sidenav-username").should("contain", Cypress.env("testUserName"))
    }) 

    //200



})