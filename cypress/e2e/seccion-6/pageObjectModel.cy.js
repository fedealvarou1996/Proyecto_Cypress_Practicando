import Login from '../../support/pagesObjects/proyectoUno_PO/proyectoUno_PO.cy';
/// <reference types="cypress" /> 
require('@cypress/xpath')

describe("Page Object Model", () =>{

    const Inicio = new Login()

    it('test', () => {
        cy.visit("https://adtangofactura.b2clogin.com/adtangofactura.onmicrosoft.com/b2c_1_singinsingupnew/oauth2/v2.0/authorize?client_id=3eee892a-0b7c-461d-abf0-64de500d90a4&redirect_uri=https%3A%2F%2Fwww.tangofactura.com%2F&response_mode=form_post&response_type=code%20id_token&scope=openid%20profile%20offline_access%20%20&state=OpenIdConnect.AuthenticationProperties%3DHwHYABwyofpTSTeavj2rgB-vvTmETZHo-6lR49zPbUSWieAtVoAqhXy7wxQz0Ll2wkmPU9GB0a-4qVmvhc8b5Ok-F1y3ZzjGMJZQNVGGt7MPbQLniXuEjegLn7GCVvAPFtoqOOg3c247d9SN9KWlqgplDt9Lu64gob5hP9AgwyskhhGdO2qOtH3JJ0ePngvmypjJIA&x-client-SKU=ID_NET461&x-client-ver=6.5.0.0")
        Inicio.IniciarSesion("farouco@axoft.com", "FEDEfasta1996")
    })

}) //cierre del Describe