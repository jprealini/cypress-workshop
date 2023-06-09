// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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

Cypress.Commands.add('apiLogin', (username: string, password: string) => {
    auth.login(username, password).then((response: any) => {
        let user = response.body.user        
        cy.fixture("localStorage").then((localS: any) => {
            localS.context.user = user
            localS._event.data.data.user = user
            localS.event.data.user = user
            window.localStorage.setItem("authState", JSON.stringify(localS))
        })
    })
})