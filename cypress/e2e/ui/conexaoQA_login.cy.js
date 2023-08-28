describe('página de login', () => {
    
    beforeEach(() => {
        cy.visit('/login')
    })

    it('faz o login válido', () => {
        
        cy.getElement('login-email').type(Cypress.env('email'), { log: false })
        cy.getElement('login-password').type(Cypress.env('password'))
        cy.getElement('login-submit').click()
        cy.getElement('dashboard-welcome').should('contain', 'Lafaiete')
    })
})