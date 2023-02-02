/// <reference types="cypress" /> 

describe("Ejemplo de Type PageUp y PageDown", () =>{
    it('Type PageUp', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        cy.title().should('equal','Datos Personales | TestingQaRvn')
        cy.get('#wsf-1-field-21').type('{pageup}')
    })

    it('Type PageDown', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        cy.title().should('equal','Datos Personales | TestingQaRvn')
        cy.get('#wsf-1-field-24').type('{pagedown}')
    })

}) //cierre del Describe