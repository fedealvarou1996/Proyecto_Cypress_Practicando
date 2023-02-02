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

Cypress.Commands.add('texto_visible', (selector, texto, tiempo) => {
    cy.get(selector).should("be.visible").type(texto)  //aca Selector va a tomar el valor que nosotros le pasamos arriba en los Argumentos y Texto seria lo que queremos que escriba
    cy.wait(tiempo)
})

Cypress.Commands.add('click_force', (selector, tiempo) => {
    cy.get(selector).should("be.visible").click({force:true})  //aca Selector va a tomar el valor que nosotros le pasamos arriba en los Argumentos y Texto seria lo que queremos que escriba
    cy.wait(tiempo)
})

Cypress.Commands.add('bloque_comandos', (name, email, dirección, tiempo) => {
    cy.get("#userName").should("be.visible").type(name)  //aca Selector va a tomar el valor que nosotros le pasamos arriba en los Argumentos y Texto seria lo que queremos que escriba
    cy.wait(tiempo)
    cy.get("#userEmail").should("be.visible").type(email)  
    cy.wait(tiempo)
    cy.get("#currentAddress").should("be.visible").type(dirección)  
    cy.wait(tiempo)
    cy.get("#submit").should("be.visible").click({force:true})
})