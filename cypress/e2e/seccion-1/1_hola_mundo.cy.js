
describe("Bienvenido al curso de Cypress", () =>{
    it('Segundo Test, Campo NAME', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        cy.get("#wsf-1-field-21").type('Federico');
        cy.get("#wsf-1-field-22").type('Alvarez Rouco');
        cy.get("#wsf-1-field-23").type('fedealvarou@gmail.com');
        cy.get("#wsf-1-field-24").type('1123241466');
        cy.get("#wsf-1-field-28").type('Jose hernandez 2477');
        cy.get('#wsf-1-field-27').click()

    })

}) //cierre del Describe