/// <reference types="cypress" /> 
require('@cypress/xpath')


describe("Selectores", () =>{
    it('Selector por ID', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        cy.title().should('equal','Datos Personales | TestingQaRvn') 
        cy.get('#wsf-1-field-21').should('be.visible').type('Federico')
    })

    it('Selector por atributos', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        cy.title().should('equal','Datos Personales | TestingQaRvn')
        cy.get("[placeholder='Apellidos']").should('be.visible').type('Alvarez Rouco')
        ///Aca estamos colocando el atributo dentro de corchetes y su valor dentro de comillas simples
    })

    it('Selector por Xpath', () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        cy.title().should('equal','Datos Personales | TestingQaRvn')
        cy.xpath("//*[@id='wsf-1-field-21']").should("be.visible").type("Federico")
    })

    it('Selector por Contain', () =>{
        cy.visit("https://testingqarvn.com.es/radio-buttons/");
        cy.get(".wsf-label").contains("Selenium") //Aca estaria deciendo que el elemento que tiene la clase "wsf-label" y contiene dentro "Selenium". Aca solo estoy validando que exista
        cy.get(".wsf-label").contains("Selenium").click() //Al selector anterior, le estamos dando click
        cy.get(".wsf-label").contains("CypressIO").click()
    })

    it.only('Selector utilizando Copy_Selector', () =>{
        cy.visit("https://testingqarvn.com.es/radio-buttons/");
        cy.get("#wsf-1-label-44-row-2").contains("WebdriverIO").click()
    })

    

}) //cierre del Describe