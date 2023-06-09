import { auth } from "./services/auth"

Cypress.Commands.add("login", (username: string, password: string) => {
    cy.visit("/")
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    cy.get("[data-test=signin-submit]").click()
})

Cypress.Commands.add('dataTest', (value: string) => {
    return cy.get(`[data-test=${value}]`)
})

Cypress.Commands.add('apiLogin', (userName: string, password: string) => {
    
        auth.login(userName, password).then((response: any) => {
            let user = response.body.user
            cy.fixture("localStorage").then((localS: any) => {
                localS.context.user = user
                localS._event.data.data.user = user
                localS.event.data.user = user
                window.localStorage.setItem("authState", JSON.stringify(localS))
            })        
        })
        
})

