/// <reference types="cypress" /> 
require('@cypress/xpath')

describe("Asserts Find", () =>{
    it('Contains', () => {
        cy.visit("https://testingqarvn.com.es/campos-requeridos/");
        cy.title().should("eq", "Campos Requeridos | TestingQaRvn")
        cy.get("#wsf-1-field-wrapper-100").find(".wsf-label") //Aca me esta marcando que cuatro elementos tienen esa clase
        cy.get("#wsf-1-field-wrapper-100").find("#wsf-1-field-100-row-3") //Aca lo busque por ID
        cy.get("#wsf-1-field-wrapper-100").find(".wsf-label").eq(3).click() // Aca lo buscamos por la posición de memoria que ocupa dentro de ese elemento
    })

}) //cierre del Describe