class Login{ //Este es el molde completo

    IniciarSesion(email, password){ //Todo lo que pongamos aca adentro va a ser activado, cuando llamemos a Iniciar
        cy.get("#email").should("be.visible").type(email),
        cy.get("#password").should("be.visible").type(password)
        cy.get('#next').should("be.visible").click()
    }
} //final

export default Login;