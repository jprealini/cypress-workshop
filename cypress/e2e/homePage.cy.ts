import { auth } from "../support/services/auth"
let users = require("../fixtures/users.json")
let fakeResponse = require("../fixtures/fakePublicResponse.json")

describe("Home Page", () => {
  let user: User = users[0]
    beforeEach(() => {
      
      cy.session("apiLogin", () => {        
        cy.apiLogin(user.username, user.password)
      })
      
    });

    it.only("Validate that the logged in user name shows in the dashboard", () => {  
      cy.intercept("GET", "http://localhost:3001/transactions/public", {
        statusCode: 200,
        body: fakeResponse,
      }).as("public")  
      cy.visit("/") 
      cy.wait("@public")
      cy.dataTest("sidenav-username").should("contain", user.username)
    }) 

    it("Validate that the logged in user name shows in the dashboard", () => {
      cy.visit("/")
      cy.dataTest("sidenav-username").should("contain", user.username)
      
    }) 

    it("Validate that the logged in user name shows in the dashboard", () => {
      cy.visit("/")
      cy.dataTest("sidenav-username").should("contain", user.username)
    })

})