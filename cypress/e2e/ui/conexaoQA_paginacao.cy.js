describe('paginação da pagina de QAs', () => {
    
    it('valida paginação com 7 perfis', () => {
        
        cy.intercept('GET', '/api/profile', { fixture: 'paginacao_7_usuarios' })
            .as('perfis')

        cy.visit('/perfis')

        cy.get('.paginationBttns li').should('not.exist')
    })

    it('valida paginação com 8 perfis', () => {
        
        const resultadoEsperado = ['<', '1', '2', '>']

        cy.intercept('GET', '/api/profile', { fixture: 'paginacao_8_usuarios' })
            .as('perfis')

        cy.visit('/perfis')

        cy.get('.paginationBttns li')
            .each((el, index) => {

                cy.wrap(el)
                    .should('have.text', resultadoEsperado[index])
            })
    })
})