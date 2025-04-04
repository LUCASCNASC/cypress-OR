export class Promotion {

    constructor(page) {
        this.page = page
    }

    //escolhendo a primeira promoção do produto - uma promoção
    async selectFirstPromoProduct (selector) {

        //botão voltar
        cy.get('[ng-click="modalSaldo()"] > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')

        //título modal promoções
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('contain', 'Promoções')

        //botão X
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')

        //botão "NÃO USAR PROMOÇÃO"
        cy.get('#dialogContent_137 > [style="padding: 0 5px"] > .md-primary')
            .should('be.visible')
            .and('not.be.disabled')

        //promoção em sim
        cy.get('.md-3-line > div.md-button > .md-no-style')
            .should('be.visible')
            .and('not.be.disabled')

        //escolhendo a promoção
        cy.get('.md-3-line > div.md-button > .md-no-style')
            .click()
    }

    //validando aqueles produtos que tem o ticket vermelho "PROMOÇÃO"
    async ticketPromotion (selector) {

        //etiqueta inteira
        cy.get('.md-secondary-container > div > .ng-scope')
            .should('be.visible')
            .and('not.be.disabled')

        //validando nome - etiqueta promoção
        cy.get('span[ng-if="(gradeAtual.tempromocao)"]')
            .should('have.text', 'PROMOÇÃO')
            .and('be.visible')

        //validando as cores - etiqueta promoção
        cy.get('span[ng-if="(gradeAtual.tempromocao)"]')
            .should('have.css', 'background-color', 'rgb(255, 0, 0)') 
            .and('have.css', 'color', 'rgb(255, 255, 255)')

    }

    //Validando modal de carregamento "Adicionando produtos/serviços..."
    async messAddProductsServices (selector) {

        //validando ícone de carregamento
        cy.get('.conteudo > .layout-align-center-center > .md-accent')
            .should('be.visible')

        //validando mensagem de carregamento
        cy.get('h3')
            .should('be.visible')
            .and('have.text', 'Adicionando produtos/serviços...')
    }

    //validando e adicionando serviço prestamista
    async addPrestamista (selector) {

        //validando ícone de serviço
        cy.get('.btn-remove-item-list > :nth-child(2) > .md-raised > .ng-scope')
            .should('be.visible')
            .and('not.be.disabled')

        //validando botão de serviço
        cy.get('.btn-remove-item-list > :nth-child(2) > .md-raised')
            .should('be.visible')
            .and('not.be.disabled')
            .click({force:true})

        //validando título do modal "Seguro prestamista"
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Seguro prestamista')

        //validando botão X do modal "Seguro prestamista"
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')

        //validando subtítulo do modal "Seguro prestamista"
        cy.get('.md-subheader-content')
            .should('be.visible')
            .and('contain.text', 'Seguro Prestamista')

        //validando nome do seguro prestamista
        cy.get('.md-no-style > .md-list-item-text > :nth-child(1)') 
            .should('be.visible')

        //validando Quantidade do seguro prestamista
        cy.get('.md-list-item-text > :nth-child(2)')
            .should('be.visible')
            .and('contain', 'Quantidade')

        //validando Valor unitário do seguro prestamista
        cy.get('.md-list-item-text > :nth-child(3)')
            .should('be.visible')
            .and('contain', 'Valor unitário')

        //validando R$ do valor do seguro prestamista
        cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding > sup')
            .should('be.visible')
            .and('contain', 'R$')

        //validando valor do seguro prestamista
        cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding')
            .should('be.visible')

        //selecionar seguro prestamista
        cy.get('#checkbox-145-0 > .md-container')
            .should('be.visible')
            .and('not.be.disabled')
            .click({force:true})

        //botão OK
        cy.get('md-dialog-actions.layout-row > .md-primary')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', ' Ok ')
            .click({force:true})
    }

    //Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
    async typeServiceFreeValidate (selector) {

        //Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
        cy.contains('Tipo(s) Serviço(s) Isento(s):')
            .should('be.visible')

        //Validando "Garantias" dentro do modal Promoções
        cy.contains('Garantias')
            .should('be.visible')
    }
}