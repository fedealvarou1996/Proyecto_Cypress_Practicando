/// <reference types="cypress" /> 
require('@cypress/xpath')

describe("Elegir opciones de campos Selects", () =>{
    it('Selects', () => {
        cy.visit("https://testingqarvn.com.es/combobox/");
        cy.title().should('eq','ComboBox | TestingQaRvn')
        cy.get("#wsf-1-field-53").should("be.visible").select("Linux") //Aca estamos verificando que existe ese elemento y eligiendo la opción LINUX
        cy.wait(2000)
        cy.get("#wsf-1-field-53").should("be.visible").select("Windows") //Aca estamos verificando que existe ese elemento y eligiendo la opción WINDOWS
    })

    it('Selects Verificar elección', () => {
        cy.visit("https://testingqarvn.com.es/combobox/");
        cy.title().should('eq','ComboBox | TestingQaRvn')
        cy.get("#wsf-1-field-53").should("be.visible").select("Linux").should("have.value","Linux") //Aca estamos verificando que exista, eligiendo LINUX y que tenga el valor LINUX
        cy.wait(2000)
        cy.get("#wsf-1-field-53").should("be.visible").select("Windows").should("have.value","Window") //Aca esta hecho mal a proposito, al no corresponder exactamente al valor
    })

    it.only('Selects Multiselección', () => {
        cy.visit("https://testingqarvn.com.es/combobox/");
        cy.title().should('eq','ComboBox | TestingQaRvn')
        cy.get("#wsf-1-label-50-row-1").should("be.visible").click()
        cy.get("#wsf-1-label-50-row-3").should("be.visible").click()
    })

}) //cierre del Describe