describe('pagina inicial', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })
    it('valida o título da página inicial', { tags: '@smoke' }, () => {
        cy.contains('Conectando').should('have.text', 'Conectando QAs ...').and('have.class', 'x-large')
    })

    it('seleciona um elemento passando o seletor', () => {
        
        cy.contains('h1','QAs').should('have.text', 'Conectando QAs ...')
    })

    it('seleciona um elemento com filter', () => {
        
        // os seletores abaixo, selecionam o botão cadastrar

        cy.get('a').filter('.btn-primary')
            .should('have.text', 'Cadastrar')
            .click('left')
        
        // cy.get('a.btn-primary')
        
        // cy.contains('a', 'Cadastrar')
    })

    it('seleciona um elemento com o find', () => {
        cy.get('.landing-inner').find('h1')
    })
})