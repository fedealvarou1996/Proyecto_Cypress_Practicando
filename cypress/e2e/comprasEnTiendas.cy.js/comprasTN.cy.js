/// <reference types="cypress" />
require('@cypress/xpath')
describe("Generar Compras en Tiendas", () =>{
    it('Compras del Combo Austria TN', () => {
        for (let i = 0; i < 15; i++){
            cy.visit("https://fedetn.mitiendanube.com/productos/combo-austria/");
            cy.get('.js-prod-submit-form').should("be.visible").click()
            cy.wait(2000)
            cy.get('#ajax-cart-submit-div > .pull-right').should("be.visible").click()
            cy.wait(2000)
            cy.get('[data-testid="email"]').should("be.visible").type("fefe@gmail.com")
            cy.get('[data-testid="shippingAddress_zipcode"]').should("be.visible").type("1428")
            cy.get('[data-testid="btnSubmitZipcode"] > span').should("be.visible").click()
            cy.wait(1000)
            cy.get('.selector').should("be.visible").click()
            cy.wait(1000)
            cy.get('[data-testid="shipping_first_name"]').should("be.visible").type("fefe")
            cy.get('[data-testid="shipping_last_name"]').should("be.visible").type("gonzales")
            cy.get('[data-testid="shipping_address"]').should("be.visible").type("jose")
            cy.get('[data-testid="shipping_number"]').should("be.visible").type("2477")
            cy.get('.text-uppercase > span').should("be.visible").click()
            cy.wait(5000)
            cy.get('#btnFinishCheckout > span').should("be.visible").click()
            cy.wait(2000)
            cy.get('#btnFinishCheckout > span').should("be.visible").click({force:true})
            cy.wait(3000)
        }

    })

}) //cierre del Describe