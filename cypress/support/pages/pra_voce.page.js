//**********Mapeamento de elementos**********

// Aqui guardei os elementos dentro da variável "elements"
const elements = {
    clicarEmPraVoceLink: ':nth-child(3) > .vr-main-navigation__link',
    validarPaginaPraVoce: '.vr-hero',
    clicarEmOndeUsarOMeuCartaoVrLink: '.vr-hero__actions > .vr-button--negative',
    validarMapaGoogleSection: '.main-section',
    aceitarTermoDePrivacidadeLink: '#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm'
}

//**********Ações**********
// Aqui foi criado uma class com as ações de cada elemento guardado na variável acima
class PraVocePage {
    aceitarTermoDePrivacidade(){
        cy.get(elements.aceitarTermoDePrivacidadeLink).click()
    }

    clicarEmPraVoce() {
        cy.get(elements.clicarEmPraVoceLink).click()
        cy.get(elements.validarPaginaPraVoce).should('be.visible')
    }

    clicarEmOndeUsarOMeuCartaoVr() {
        cy.get(elements.clicarEmOndeUsarOMeuCartaoVrLink).click()
    }

//**********Validação**********

    validacaoMapaGoogle() {
        cy.get(elements.validarMapaGoogleSection).should('be.visible')
    }


}



export default new PraVocePage();