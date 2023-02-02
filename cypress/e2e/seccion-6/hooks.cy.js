/// <reference types="cypress" /> 
require('@cypress/xpath')

describe("Hooks", () =>{

    before(() => {
        cy.log("Se ejecuta antes que todo")
    })
    
    beforeEach(() => {
        cy.log("Se ejecuta antes que cada test")
    })
    
    afterEach(() => {
        cy.log("Se ejecuta despues de cada test")
    })
    
    after(() => {
        cy.log("Se ejecuta despues de todos los tests")
    })
    
    it('test', () => {
        cy.log("Tests 1")
    })

    it('test', () => {
        cy.log("Tests 2")
    })

}) //cierre del Describe