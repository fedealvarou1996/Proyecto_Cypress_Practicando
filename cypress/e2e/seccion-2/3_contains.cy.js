/// <reference types="cypress" /> 
require('@cypress/xpath')

describe("Asserts Contains", () =>{
    it('Contains', () => {
        cy.visit("https://testingqarvn.com.es/campos-requeridos/");
        cy.get("#wsf-1-field-wrapper-100").contains("PHP").click() //Esto lo podemos usar para que recorra todo el contenido. Solo se puede usar desde un PADRE
    })

}) //cierre del Describe