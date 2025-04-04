import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../gerarDados';
import { gerarChavePixTelefone } from '../../../gerarDadosPIX'

export class GeneralAdress {

    constructor(page) {
        this.page = page
    }

    //Validar e clicar na aba ENDEREÇO
    async clickAbaAdress (selector) {

        //Aba Endereço
        cy.get('#menu_items_pri > :nth-child(2)')
            .should('be.visible')
            .and('have.text', 'Endereço')

        cy.intercept('GET', '/services/v3/dados_tabela/tipoendereco').as('api_cliente_completo_endereco')
        //Clicar na aba Endereço
        cy.get('#menu_items_pri > :nth-child(2)')
            .scrollIntoView()
            .click({force:true})
        cy.wait('@api_cliente_completo_endereco', { timeout: 40000 })
    }

    // validando mensagem Endereço Incluído com sucesso, após incluírmos o endereço no cadastro
    async messAdressAddedSucess (selector) {

        //Card Endereço incluído com sucesso.
        cy.get('.toast-success')
            .should('be.visible')

        //Card Endereço incluído com sucesso. - Aviso
        cy.get('.toast-success > .toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
        cy.get('.toast-success > .toast-message')
            .should('be.visible')
            .and('have.text', 'Endereço incluído com sucesso.')
    }

    //botão + para adicionar um novo endereço
    async clickAddNewAdress (selector) {

        //Botão +, para adicionar um novo endereço
        cy.get('.layout-align-end-end > .md-fab')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        cy.intercept('GET', '/views/cliente/ModalClienteEndereco.html').as('api_ModalClienteEndereco')
        //Clicar no botão +, para adicionar um novo endereço
        cy.get('.layout-align-end-end > .md-fab')
            .click()
        cy.wait('@api_ModalClienteEndereco', { timeout: 40000 })
    }

    //validar informações do modal Endereço enquanto ainda está vazio
    async modalAdressEmptyValidade (selector) {

        //Campo CEP - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtCepEndereco"]')
            .should('have.text', 'CEP') 

        //Validando campo vazio - CEP
        cy.get('#txtCepEndereco')
            .should('be.visible')
            .and('have.value', '')

        //Campo Endereço - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtRuaEndereco"]')
            .should('have.text', 'Endereço') 

        //Validando campo vazio - Endereço
        cy.get('#txtRuaEndereco')
            .should('be.visible')
            .and('have.value', '')

        //Campo Número - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtNumEndereco"]')
            .should('have.text', 'Número') 

        //Validando campo vazio - Número
        cy.get('#txtNumEndereco')
            .should('be.visible')
            .and('have.value', '')

        //Campo Complemento - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtComplEndereco"]')
            .should('have.text', 'Complemento') 

        //Validando campo vazio - Complemento
        cy.get('#txtComplEndereco')
            .should('be.visible')
            .and('have.value', '')

        //Campo Bairro - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtBairroEndereco"]')
            .should('have.text', 'Bairro') 

        //Validando campo vazio - Bairro
        cy.get('#txtBairroEndereco')
            .should('be.visible')
            .and('have.value', '')

        //Campo Caixa Postal - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtCxPostEndereco"]')
            .should('have.text', 'Caixa Postal')

        //Validando campo vazio - Caixa Postal
        cy.get('#txtCxPostEndereco')
            .should('be.visible')
            .and('have.value', '')

        //Campo Estado - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtUfEndereco"]')
            .should('have.text', 'Estado')

        //Validando campo vazio - Estado
        cy.get('#txtUfEndereco')
            .should('be.visible')
            .and('have.value', '')

        //Campo Cidade - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtCidEndereco"]')
            .should('have.text', 'Cidade')

        //Validando campo vazio - Cidade
        cy.get('#txtCidEndereco')
            .should('be.visible')
            .and('have.value', '')
    }

    //clicar para abrir opções de tipo endereço
    async clickOpenTypeAdress (selector) {

        //Clicar para aparecer as opções do Tipo de Endereço
        cy.get('#txtTpEndereco')
            .click({force:true})
    }

    //validando informações que foram adicionadas no endereço
    async infoAdressAdded (selector) {

        //Card de endereço adicionado
        cy.get('.md-whiteframe-2dp')
            .should('be.visible')
            .and('contain', 'Padrão')
            .and('contain', 'RUA PETÚNIA - 66 - PARQUE INDUSTRIAL')
            .and('contain', '87065-300')
    }

    //clicar no botão salvar endereço
    async clickSaveAdress (selector) {

        //Clicar no botão SALVAR, para adicionar endereço
        cy.get('#btnModalAddEndereco')
            .click()
    }

    //validando card endereço antes de preencher os campos
    async cardAdressEmptyValidate (selector) {

        //Card Endereço - validando título Endereço
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Endereço')

        //Validando botão X
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Tentar adicionar endereço sem passar as informações necessárias - não deve deixar
        cy.get('#btnModalAddEndereco')
            .should('be.visible')
            .and('not.have.attr', 'not.disabled')

        //Campo Tipo de Endereço - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtTpEndereco"]')
            .should('have.text', 'Tipo de Endereço') 

        //Validando campo vazio - Tipo de Endereço
        cy.get('#txtTpEndereco')
            .should('be.visible')
            .and('have.value', '')
    }
}