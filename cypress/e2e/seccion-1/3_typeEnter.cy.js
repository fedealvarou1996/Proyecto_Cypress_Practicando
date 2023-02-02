/// <reference types="cypress" />

describe("Funciones para Type", () =>{
    it('Type --> ENTER (cuando presionen)', () => {
        cy.visit("https://www.google.com.ar/");
        cy.title().should('eq',"Google")
        cy.get(".gLFyf").type("cypress io {enter}") //Aca estamos usando un selector de Clase para obtener un elemento y despues le pusimos con la Fx Type que ingrese Cypress io y haga enter
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3").click() //Aca lo buscamos por el copy --> Selector
    })

}) //cierre del Describe