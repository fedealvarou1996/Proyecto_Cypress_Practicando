/// <reference types="cypress" />
require('@cypress/xpath')

describe("Carga por Fixture",() =>{

    before(function(){
        cy.fixture('example.json').then(function(data){ //Lo que hace es tomar todos los datos que estan en el archivo y los pasa a la variable data y luego con globalthis la iniciamos
            //this.data = data
            globalThis.data = data
        })
    })

    it("Text uno cargando desde JSON", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.get('#userName').type(data.name)
        cy.get('#userEmail').type(data.email)
        cy.get('#currentAddress').type(data.dir1)
        cy.get('#permanentAddress').type(data.dir2)
        cy.get('#submit').click()

    })
    
})