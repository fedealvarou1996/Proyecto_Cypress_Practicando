/// <reference types="cypress" /> 
require('@cypress/xpath')

describe("Hooks Ejemplos", () =>{

    beforeEach(()=>{ 
        cy.visit("https://demoqa.com/text-box"); //Aca estamos diciendo que antes de que inicies ve a tal pagina
        cy.title().should("eq","ToolsQA")
        cy.wait(2000)
    })

    it('test 1', () => {
        cy.get('#userName').type("Federico")
    })

    it('test 2', () => {
        cy.get('[type="email"]').should("be.visible")
        cy.get("[type='email']").type("fedealvarou@gmail.com")
        
    })
}) //cierre del Describe