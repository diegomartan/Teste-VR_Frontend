import praVocePage from "../support/pages/pra_voce.page"; //Aqui foi importado a "page" criada para guardar os elementos e suas ações

// Acessando a página que foi definida nas configurações do cypress
beforeEach(() => {
    cy.visit(Cypress.config('url'))    
})


// Aqui estão as ações do teste, onde ele aceita os termos de privacidade, navega para a seção desejada, clica no botão escolhido e valida o mapa do Google.
describe('Garantir validação do Mapa Google', () => {

    it('Validando mapa do Google', () => {

        //Act
        praVocePage.aceitarTermoDePrivacidade()
        praVocePage.clicarEmPraVoce()
        praVocePage.clicarEmOndeUsarOMeuCartaoVr()

        //Assert
        praVocePage.validacaoMapaGoogle()

    })

})