describe('cabeçalho da página Home', () => {

    context('não logado', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        it('valida o cabeçalho', () => {

            // Conexão QA
            cy.getElement('navbar-conexaoQA')
                .should('have.attr', 'href', '/')
                .and('not.have.attr', 'target', '_blank')
            
            // QAs
            cy.getElement('navbar-QAs')
                .should('have.attr', 'href', '/perfis')
                .and('not.have.attr', 'target', '_blank')

            // Sobre
            cy.getElement('navbar-about')
                .should('have.attr', 'href', '/sobre')
                .and('not.have.attr', 'target', '_blank')

            // Cadastrar
            cy.getElement('navbar-register')
                .should('have.attr', 'href', '/cadastrar')
                .and('not.have.attr', 'target', '_blank')

            // Login
            cy.getElement('navbar-login')
                .should('have.attr', 'href', '/login')
                .and('not.have.attr', 'target', '_blank')
        })

        it('valida o cabeçalho utilizando Object', () => {
            
            const menus = [
                { seletor: 'navbar-conexaoQA', link: '/' },
                { seletor: 'navbar-QAs', link: '/perfis' },
                { seletor: 'navbar-about', link: '/sobre' },
                { seletor: 'navbar-register', link: '/cadastrar' },
                { seletor: 'navbar-login', link: '/login' }
            ]

            menus.forEach(({ seletor, link }) => {

                cy.getElement(seletor)
                    .should('have.attr', 'href', link)
                    .and('not.have.attr', 'target', '_blank')
            })
        })

        ;[
            { seletor: 'navbar-conexaoQA', link: '/', menu: 'Conexão QA' },
            { seletor: 'navbar-QAs', link: '/perfis', menu: 'QAs' },
            { seletor: 'navbar-about', link: '/sobre', menu: 'Sobre' },
            { seletor: 'navbar-register', link: '/cadastrar', menu: 'Cadastrar' },
            { seletor: 'navbar-login', link: '/login', menu: 'Login' }
        ].forEach(({ seletor, link, menu }) => {
            it(`valida o menu ${menu} - Teste Dinâmico`, () => {

                cy.getElement(seletor)
                    .should('have.attr', 'href', link)
                    .and('not.have.attr', 'target', '_blank')
            })
        })

    })

    context('logado', () => {

        before(() => {
            cy.login(Cypress.env('email'), Cypress.env('password'))
        })

        beforeEach(() => {
            cy.visit('/')
        })
        
        afterEach(() => {
            Cypress.Cookies.defaults({
                preserve: []
            })
        })

        it.only('teste', () => {
            cy.log('teste')
        })
    })
})