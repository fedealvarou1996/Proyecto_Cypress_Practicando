/// <reference types="cypress" /> 

describe("Introducción a los Asserts", () =>{
    it('Be visible, Be enabled', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        cy.title().should('equal','Datos Personales | TestingQaRvn') //Ya aca con el equal o eq estamos utilizando un Assert, ya que esta validando que el elemento TITLE tenga tal nombre
        cy.get('#wsf-1-field-21').should("be.visible").type("Federico") //Aca le esta preguntado si es visible o no el elemento (si existe). Y luego le ingresa el nombre
        cy.get('#wsf-1-field-22').should("be.visible").type("Alvarez Rouco")
        cy.get('#wsf-1-field-23').should("be.visible").should("be.enabled").type("fedealvarou@gmail.com")  //Con el 1° Should, estamos preguntando que sea visible y el 2° que este activo
    })

    it('Click Sencillo', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq','OrangeHRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should('be.visible').click()  //Aca estamos preguntando que sea visible y luego hacer un click
        cy.wait(2000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click()
        cy.get('.oxd-button oxd-button--medium oxd-button--ghost').should('be.visible').click()
    })

    it.only('Click Force TRUE', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq','OrangeHRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('be.visible').click({force:true}) //Con esto, si no lo toma, es porque el selector no es el adecuado
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('be.visible').click()

    })

}) //cierre del Describe