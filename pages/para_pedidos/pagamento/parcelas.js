export class escolherParcelaReceb {

    constructor(page) {
        this.page = page
    }

    //escolhendo parcelas da forma de pagamento escolhida - 1X
    async Uma (selector) {

        //selecionando parcelas - 1X
        cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
            .should('be.visible')
            .and('not.be.disabled')

        //selecionando parcelas - 1X
        cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
        //     .should('be.visible')
        //     .and('not.be.disabled')
            .click({force:true})
    }

    //escolhendo parcelas da forma de pagamento escolhida - 2X
    async Duas (selector) {

        //selecionando parcelas - 2X
        cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(2) > div.ng-binding')
            .should('be.visible')
            .and('not.be.disabled')
            .click({force:true})
    }

    //escolhendo parcelas da forma de pagamento escolhida - 4X
    async Quatro (selector) {

        cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding') 
            .scrollIntoView()
            .wait(200)

        //selecionando parcelas - 4X
        cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding')
            .should('be.visible')
            .and('not.be.disabled')

        cy.intercept('GET', '/views/carrinho/modalSeguroPrestamista.html').as('api_modal_seguro_prestamista')
        //selecionando parcelas - 4X
        cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding')
            .click({force:true})
        cy.wait('@api_modal_seguro_prestamista', { timeout: 40000 })
    }
}