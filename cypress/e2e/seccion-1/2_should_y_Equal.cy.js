/// <reference types="cypress" /> 

describe("", () =>{
    it('Test Validar el titulo', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        cy.title().should('eq','Datos Personales | TestingQaRvn') //el SHOULD es una Asserta para validar algo y el eq esta validando el texto del Title
        cy.log("Es el Title correcto")                            //El SHOULD es bastante celoso de las mayúsculas y minúsculas
    })

}) //cierre del Describe