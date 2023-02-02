/// <reference types="cypress" /> 

describe("Ejemplo de Type PageUp y PageDown", () =>{ ///Si quiero que solo me tome este test, puedo colocar IT.ONLY, al principio de todo
    it('Type PageUp', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        cy.title().should('equal','Datos Personales | TestingQaRvn')
        cy.get('#wsf-1-field-21').type('{pageup}')
    })

    it('Type PageDown', () => { ///Si quiero que no me tome este test, puedo colocar XIT, al principio de todo
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        cy.title().should('equal','Datos Personales | TestingQaRvn')
        cy.get('#wsf-1-field-24').type('{pagedown}')
    })

}) //cierre del Describe