/// <reference types="cypress" />
require('@cypress/xpath')
describe("Alias", () =>{
    it('Manejo de Alias', () => {
        cy.visit("https://testpages.herokuapp.com/styled/basic-javascript-validation-test.html");
        cy.title("Test Page For Basic JavaScript Validation Example")
        cy.get("#lteq30").should("be.visible").as("campo")
        cy.get("@campo").type("Federico")
    })

}) //cierre del Describe