/// <reference types="cypress" /> 
require('@cypress/xpath')

describe("Asserts Verificar texto", () =>{
    it.only('Contains', () => {
        cy.visit("https://testingqarvn.com.es/combobox-dependiente/");
        cy.title().should("eq", "ComboBox Dependiente | TestingQaRvn")
        cy.get("#wsf-1-field-wrapper-60 #wsf-1-label-60-row-1").then((e)=>{
            //cy.log(e.text())
            let nombre = e.text()
            //cy.log(nombre)
            if (nombre == "CypressIO"){
                cy.log("Estoy utilizando Cypress")
            }
        })
        cy.get("#wsf-1-label-59-row-1").then((e) =>{
            //cy.log(e.text())
            let lenguaje = e.text()
            lenguaje = lenguaje.slice(0,5)
            //cy.log(lenguaje)
            if (lenguaje == "PHP"){
                cy.log("Elegi PHP")
            }
        })
    })

}) //cierre del Describe