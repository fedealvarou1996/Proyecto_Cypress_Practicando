/// <reference types="cypress" />
require('@cypress/xpath')

describe("Generar Compras en Tiendas", () =>{

    it.only('Ingreso a MELI colocando usuario y contraseña', () => { //se tiene que hacer desde navegador EDGE

        cy.visit("https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAzVOSY7DIBD8S52Rfec4H0Edu3BagWA1nZBRlL-P0CjH2uuN0g69J_89iQi-zqKbOgLOIp6b1aQ7ImpBQFfnF8q0iEml0zriexYd3H-Ym82qLKUTAfLwa8qlDcT_LQRoT3w57S4lDV6eyql-E0dDxNX97HFdxxhLpW2yt6IX47K1uoitCDAe2p3GedDtQXwCsnRPbrLdECf3-QNAMU-v4gAAAA/user");
        //cy.get("#nav-header-menu > a:nth-child(2)").click({force:true})
        cy.get("#user_id").click({force:true})
        cy.get("#user_id").type("MURIELBLK")
        cy.get("#login_user_form > div.login-form__actions > button > span").click({force:true})
        cy.wait(500)
        cy.get("#password").click({force:true})
        cy.get("#password").type("TEFE2015")
        cy.get("#action-complete > span").click({force:true})
        cy.wait(4000)
        //cy.visit("https://articulo.mercadolibre.com.ar/MLA-1302137885-combo-austria-_JM")
    })

    it('Ingreso a MELI colocando usuario y contraseña', () => { //se tiene que hacer desde navegador EDGE

        cy.visit("https://articulo.mercadolibre.com.ar/MLA-1302137885-combo-austria-_JM");
        cy.get("#main_actions > form > div > button > span").click({force:true})
        cy.wait(1000)
        cy.get("#root-app > div > div.wrap > div > div.andes-card.andes-card--flat.andes-card--default.center-card__body.center-card__body--reduced.center-card__body--centered.center-card__body--footerless.andes-card--padding-default > div:nth-child(2) > a.andes-button.login-link.andes-button--large.andes-button--transparent > span").click({force:true})
        cy.get("#user_id").click({force:true})
        cy.get("#user_id").type("murielblk")
        cy.get("#login_user_form > div.login-form__actions > button > span").click({force:true})
        cy.wait(500)
        cy.get("#password").click({force:true})
        cy.get("#password").type("TEFE2015")
        cy.get("#action-complete > span").click({force:true})
        cy.wait(4000)
        cy.visit("https://articulo.mercadolibre.com.ar/MLA-1302137885-combo-austria-_JM")
    })


    it('Compras del Combo Austria MELI', () => { //se tiene que hacer desde navegador EDGE
        let cardnumber = "5031755734530604"
        let dueñotarjeta = "APROB"
        let fechavenc = "11/25"
        let codigoseguridad = "123"
        let dni = "39644563"

        cy.visit("https://www.mercadolibre.com.ar/");
        cy.get('#nav-header-menu > a:nth-child(2)').click()
        cy.get(':nth-child(1) > .nav-mobile-button').click({force:true})
        for (let i = 0; i < 15; i++){
            cy.visit("https://articulo.mercadolibre.com.ar/MLA-1224102315-combo-austria-_JM");
            cy.get('.ui-pdp-actions__container > .andes-button > .andes-button__content').click({force:true})
            cy.wait(4000)
            cy.get('.ui-button').click({force:true})
            cy.get('#app-container > div > section > div > form > div:nth-child(5) > ul > li:nth-child(1) > div > label > div.ui-radio__text').click({force:true})
            cy.wait (1000)
            cy.get('#app-container > div > section > div > form > div.ui-list-footer > div.list-submit-button > button').click({force:true})
            cy.get("[for='cardNumber']").type(cardnumber)
            cy.get("[for='ownerName']").type(dueñotarjeta)
            cy.get("[for='expirationDate']").type(fechavenc)
            cy.get("[for='securityCode']").type(codigoseguridad)
            cy.get("[for='userIdentificationNumber']").type(dni)
            cy.get('#app-container > div > div > div.new-card__panel > div > section > div > form > div.ui-form__actions > button').contains("Continuar").click({force:true})
            cy.get('#app-container > div > section > div > form > div > article > div > ul > li:nth-child(1) > div > label > div.ui-radio__text > div').contains("1 cuota de").click({force:true})
            cy.get('#app-container > div > section > div > div.ui-list-footer > div.list-submit-button > button').click({force:true})
            cy.get('#app-container > div > div > section > div.user-identification__panel > div > div > div > div > form > div.ui-form__actions > button').click({force:true})
            cy.get('#aside-container > div > div > aside > section > form > button > span.aside-button__text').click({force:true})
            cy.wait(15000)
        }
        
    })

        it('Compras del Combo Germano MELI', () => { //se tiene que hacer desde navegador EDGE
        let cardnumber = "5031755734530604"
        let dueñotarjeta = "APROB"
        let fechavenc = "11/25"
        let codigoseguridad = "123"
        let dni = "39644563"



        cy.visit("https://www.mercadolibre.com.ar/");
        cy.get('.nav-header-menu-switch').click()
        cy.get(':nth-child(1) > .nav-mobile-button').click({force:true})
        for (let i = 0; i < 15; i++){
            cy.visit("https://articulo.mercadolibre.com.ar/MLA-1285393718-combo-germano-_JM");
            cy.get('#main_actions > form > div > button.andes-button.andes-spinner__icon-base.andes-button--loud > span').click({force:true})
            cy.wait(4000)
            cy.get('.ui-button').click({force:true})
            cy.get('#app-container > div > section > div > form > div:nth-child(2) > ul > li:nth-child(1) > div > label > div.ui-radio__text').click({force:true})
            cy.wait (1000)
            cy.get('#app-container > div > section > div > form > div.ui-list-footer > div.list-submit-button > button').click({force:true})
            cy.get("[for='cardNumber']").type(cardnumber)
            cy.wait (500)
            cy.get("[for='ownerName']").type(dueñotarjeta)
            cy.wait (500)
            cy.get("[for='expirationDate']").type(fechavenc)
            cy.wait (500)
            cy.get("[for='securityCode']").type(codigoseguridad)
            cy.wait (500)
            cy.get("[for='userIdentificationNumber']").type(dni)
            cy.wait (500)
            cy.get('#app-container > div > div > div.new-card__panel > div > section > div > form > div.ui-form__actions > button').contains("Continuar").click({force:true})
            cy.get('#app-container > div > section > div > form > div > article > div > ul > li:nth-child(1) > div > label > div.ui-radio__text > div').contains("1 cuota de").click({force:true})
            cy.get('#app-container > div > section > div > div.ui-list-footer > div.list-submit-button > button').click({force:true})
            cy.get('#app-container > div > div > section > div.user-identification__panel > div > div > div > div > form > div.ui-form__actions > button').click({force:true})
            cy.get('#aside-container > div > div > aside > section > form > button > span.aside-button__text').click({force:true})
            cy.wait(15000)
        }
        
    })



}) //cierre del Describe