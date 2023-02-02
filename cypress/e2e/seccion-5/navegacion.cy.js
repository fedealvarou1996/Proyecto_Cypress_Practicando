/// <reference types="cypress" /> 
require('@cypress/xpath')
describe("Modos de Navegación", () =>{
    it('Back and Forwards', () => {
        cy.visit("https://demoqa.com/");
        cy.get("#app > div > div > div.home-body > div > div:nth-child(1) > div").click()
        cy.get("#item-0").click()
        cy.go("back")
        cy.wait(1000)
        cy.go("back")
        cy.wait(1000)
        cy.go("forward")
        cy.wait(1000)
        cy.go("forward")
    })

    it.only('Reload', () => {
        cy.visit("https://demoqa.com/");
        cy.get("#app > div > div > div.home-body > div > div:nth-child(1) > div").click()
        cy.get("#item-0").click()
        cy.get('#userName').type("Federico")
        cy.reload()
    })

}) //cierre del Describe