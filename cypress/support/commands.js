import Ajv from 'ajv'

Cypress.Commands.add('login', (email, password) => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: {
            email: email,
            password: password
        }
    }).then(() => {
        // comando para que o Cypress preserve os cookies
        Cypress.Cookies.defaults({
            preserve: 'jwt'
        })
    })
})

Cypress.Commands.add('testeContrato', () => {
    // função que mostra os erros
    const getSchemaError = (ajvErros) => {
        return cy.wrap(
            `Campo: ${ajvErros[0]['instancePatch']} é inválido. Erro: ${ajvErros[0]['message']}`
        )
    }
})