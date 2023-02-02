/// <reference types="cypress" /> 
require('@cypress/xpath')

describe("Comandos Personalizados", () =>{
    it('Comando 1', () => {
        cy.viewport(1280, 720)
        cy.visit("https://demoqa.com/text-box"); //Aca estamos diciendo que antes de que inicies ve a tal pagina
        cy.title().should("eq","DEMOQA")
        cy.texto_visible("#userName","Federico", 1000)
        cy.texto_visible("#userEmail", "fedealvarou@gmail.com", 200)
    })

    it('Comando 2', () => {
        cy.viewport(1280, 720)
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","DEMOQA")
        cy.click_force("#submit",500)
    })

    it.only('Comando 3', () => {
        cy.viewport(1280, 720)
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","DEMOQA")
        cy.bloque_comandos("Federico", "fedealvarou@gmail.com", "Jose Hernandez 2477", 500)
    })

}) //cierre del Describe