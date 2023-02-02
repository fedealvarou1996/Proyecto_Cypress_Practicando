/// <reference types="cypress" />
require('@cypress/xpath')
describe("Tablas", () =>{
    it('Seleccionar por CHILDREN', () => {
        cy.visit("https://testingqarvn.com.es/base-practicas/");
        cy.title().should("eq", "Productos | TestingQaRvn")
        cy.get("#wsf-1-fields-19").should("be.visible").children("#wsf-1-field-wrapper-156").children("#wsf-1-field-156").type("Federico")
    })

    it.only('Seleccionar por EQ', () => {
        cy.visit("https://testingqarvn.com.es/base-practicas/");
        cy.title().should("eq", "Productos | TestingQaRvn")
        cy.get("#wsf-1-label-160-row-1").eq(0).should("contain", "Product 1").click({force:true})
    })

}) //cierre del Describe