/// <reference types="cypress" />
require('@cypress/xpath')
describe("", () =>{
    it('FOR primera parte', () => {
        for(let i = 1; i <= 10; i++){
            cy.log("Numero: " + i) //Aca estoy contatenando texto con una variable
        }
    })

    it('FOR segunda parte', () => {
        for(let i = 1; i <= 10; i++){
            let t = 5
            cy.log(t + " X " + i + " = " + t*i) //Aca estoy contatenando texto con una variable
        }
    })

    it('EACH parte uno', () =>{
        cy.visit("https://testingqarvn.com.es/combobox-dependiente/");
        cy.title().should("eq", "ComboBox Dependiente | TestingQaRvn")
        cy.get(".wsf-label").each(($el, index, $list) =>{ 
            //cy.log($el.text()) //Aca le ponemos la función TEXT para ver lo que trae dentro
            let texto_elementos = $el.text()
            cy.log(texto_elementos)
        })
    })

    it('EACH parte dos', () =>{
        cy.visit("https://testingqarvn.com.es/combobox-dependiente/");
        cy.title().should("eq", "ComboBox Dependiente | TestingQaRvn")
        cy.get(".wsf-label").each(($el, index, $list) =>{ 
            //cy.log($el.text()) //Aca le ponemos la función TEXT para ver lo que trae dentro
            let texto_elementos = $el.text()
            if (texto_elementos.includes("CypressIO")){
                cy.wrap($el).click()  //Aca no podemos poner el GET. El WRAP agarra los elementos que se estan recorriendo y escogemos un elemento que contenga "CypressIO", dale click
            }
        })
    })

    it.only('For parte tres', () =>{
        cy.visit("https://testingqarvn.com.es/combobox-dependiente/");
        cy.title().should("eq", "ComboBox Dependiente | TestingQaRvn")
        let t = 2000
        for(let i = 6; i <= 12; i++){
            cy.get(".wsf-label").eq(i).click()
            cy.wait(t)
        }
    })

}) //cierre del Describe