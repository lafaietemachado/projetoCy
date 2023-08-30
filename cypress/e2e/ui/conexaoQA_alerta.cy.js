describe('alertas', () => {
    
    it('valida o alerta de credencial inválida', () => {
        
        cy.clock()

        cy.visit('/login')

        cy.getElement('login-email')
            .type('jubileu@terra.com.br')

        cy.getElement('login-password')
            .type('123456')

        cy.getElement('login-submit')
            .click()

        cy.getElement('alert')
            .should('have.text', 'Credenciais inválidas')

        cy.tick(10000)

        cy.getElement('alert')
            .should('not.exist')
    })
})