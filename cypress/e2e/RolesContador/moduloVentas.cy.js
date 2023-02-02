/// <reference types="cypress" />
require('@cypress/xpath')
describe("Clientes y Proovedores", () =>{
    it('', () => {
        cy.visit("https://desa5.tangofactura.com/Home/BsDashboard");
        //cy.get('#email').type("fedealvarou@gmail.com")
        //cy.get('#password').type("FEDEfasta1996")
        cy.wait(2000)
        //cy.get('#next').click()
        cy.wait(2000)
    })

}) //cierre del Describe