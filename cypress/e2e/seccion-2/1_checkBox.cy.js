/// <reference types="cypress" /> 
require('@cypress/xpath')

describe("CheckBox", () =>{
    it('Check uno', () => {
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/");
        cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')
        cy.get(".wsf-label").contains("PHP").click()
    })

}) //cierre del Describe