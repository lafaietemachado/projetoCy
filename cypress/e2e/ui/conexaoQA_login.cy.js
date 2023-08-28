describe('página de login', () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it('faz o login válido', () => {

        cy.intercept('GET', '/api/profile/me')
            .as('apiLogin')

        cy.getElement('login-email').type(Cypress.env('email'), { log: false })

        cy.getElement('login-password').type(Cypress.env('password'))

        // eslint-disable-next-line cypress/unsafe-to-chain-command
        cy.getElement('login-submit')
            .click()
            .wait('@apiLogin')
            .then(({ response }) => {
                expect(response.body.bio).to.eq('QA')
            })

        cy.getElement('dashboard-welcome').should('contain', 'Lafaiete')
    })
})