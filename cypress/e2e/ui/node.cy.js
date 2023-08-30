const fs = require('fs')

describe('testes do cypress.config.js', () => {
    
    it('conta o total de arquivos da pasta API', () => {

        cy.task('lerPasta','cypress/e2e/api')
            .then((totalArquivos) => {
                expect(totalArquivos).to.eq(2)
            })
    })

    // erro porque o browser não consegue executar FS
    it.skip('conta o total de aqruivos da pasta UI', () => {
        
        cy.log(fs.readdirSync('cypress/e2e/ui').length)
    })

    it.only('valida a conexão com o mongo', () => {
        cy.task('conectarMongo')
        console.log('Teste de log no browser')
    })
})