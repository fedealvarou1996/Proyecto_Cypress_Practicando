/// <reference types="cypress" /> 
require('@cypress/xpath')
describe("Configuración y uso de los Snippets", () =>{
    it('Snnipets Uno', () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get("#userName").should("be.visible").type("federico")
        
        
    })

}) //cierre del Describe