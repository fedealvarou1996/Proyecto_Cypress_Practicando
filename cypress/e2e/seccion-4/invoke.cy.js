/// <reference types="cypress" />
require('@cypress/xpath')
describe("INVOKE", () =>{
    it('Invoke Text I', () => {
        cy.visit("https://testpages.herokuapp.com/styled/basic-html-form-test.html");
        cy.title(" HTML Form Elements")
        cy.get("body > div > h1").invoke("text").as("info") //Aca busque el elemento y guarde el texto que tiene escrito en INFO
        cy.get("@info").should("contain","Basic") //Luego compare ese texto de INFO, para ver si contenia Basic. Si lo ponia en miniscula, no lo toma
    })

    it('Invoke Text II', () => {
        cy.visit("https://testpages.herokuapp.com/styled/basic-html-form-test.html");
        cy.title(" HTML Form Elements")
        cy.get("#HTMLFormElements > table > tbody > tr:nth-child(1) > td").invoke("text").as("cuadroUserName")
        cy.get("@cuadroUserName").should("contain","Username").then(()=>{ //estamos iniciando una función Flecha. Donde si ese elemento contiene "USERNAME", hace lo que viene dentro
            cy.get(':nth-child(1) > td > input').type("Federico") //Escribe en el campo de "USERNAME", "Federico"
        })
    })

    it('Invoke Style', () => {
        cy.visit("https://www.webcampus.uade.edu.ar/Login.aspx")
        cy.get("#ctl00_ContentPlaceHolderMain_btnEntrar").invoke("attr", "style", "color:Blue; font-size: 80px") 
        //Aca lo que estamos haciendo es resaltar con color azul y tamaño de letra 80px, mediante la función INVOKE
    })

    it.only('Invoke Ocultar y Mostrar', () => {
        cy.visit("https://www.webcampus.uade.edu.ar/Login.aspx")
        cy.get("#ctl00_ContentPlaceHolderMain_btnEntrar").invoke("hide")
        cy.wait(2000)
        cy.get("#ctl00_ContentPlaceHolderMain_btnEntrar").invoke("show", "2s") //Aca estamos diciendo que tarde dos segundos en mostrarlo
    })

}) //cierre del Describe