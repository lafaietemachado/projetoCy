describe('API - Profile', () => {
    let urlPerfis = '/api/profile'

    context('todos os perfis', () => {

        it('Valida a API de perfis', () => {

            cy.log('Teste de texto')
            
            cy.request({
                method: 'GET',
                url: urlPerfis
            // eslint-disable-next-line lines-around-comment
            // }).then(respostaAPI => { // posso declarar uma variável ou usar o destruction conforme abaixo
            }).then(({ status, duration, body, headers }) => {
                expect(status).to.eq(200)
                expect(duration).to.be.lessThan(10000)
                expect(body[0].status).to.equal('QA Pleno')
                expect(body[0].user.name).to.eq('Lafaiete Rodrigues Machado ')
                expect(body[0].skills[0]).to.eq('Cypress')
                // eslint-disable-next-line lines-around-comment
                // validar o tamanho do array
                expect(body[0].skills).to.have.lengthOf(1)  
                // eslint-disable-next-line lines-around-comment
                // validar se o campo não ser nulo
                expect(body[0].date).to.not.be.null       
                expect(headers['x-powered-by']).to.eq('Express') 
            })
        })
    })

    context('perfil específico', () => {

        let urlPerfil = '/api/profile/user'
        
        it('seleciona um usuário inválido', () => {

            cy.request({
                method: 'GET',
                url: `${urlPerfil}/1`,
                // eslint-disable-next-line lines-around-comment
                // passar o teste quando o result não for 200
                failOnStatusCode: false
            }).then(respostaAPI => {
                expect(respostaAPI.status).to.eq(404)
                expect(respostaAPI.body.errors[0].msg).to.eq('Perfil não encontrado')
            })          
        })
        
        it('valida um usuário válido', () => {
            let usuarioId = '64db9b6296f1041428d3be7f'
            
            cy.request({
                method: 'GET',
                url: `${urlPerfil}/${usuarioId}`
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.user.name).to.eq('Lafaiete Rodrigues Machado ')
            })          
        })

        it('valida um usuário válido buscando na base', () => {

            // declarar variavel
            // eslint-disable-next-line spaced-comment
            //let usuarioId = ''

            cy.request({
                method: 'GET',
                url: urlPerfis
            }).then(({ body }) => {
                // eslint-disable-next-line spaced-comment
                //usuarioId = body[1].user._id

                cy.request({
                    method: 'GET',
                    // eslint-disable-next-line lines-around-comment
                    // url: `/api/profile/user/${usuarioId}`
                    url: `${urlPerfil}/${body[0].user._id}`
                }).then(({ status, body }) => {
                    expect(status).to.eq(200)
                    expect(body.status).to.eq('QA Pleno')
                })
            })
            
        })
    })
})