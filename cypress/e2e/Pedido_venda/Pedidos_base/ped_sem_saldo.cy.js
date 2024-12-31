import { escolherClientePedido, processoVendaPrincipal, escolherProdutoPesquisa, escolherVoltagemProduto, semSaldodisponivel } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoSemSaldo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Tentar gerar pedido de venda com produto sem saldo - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
    })

    context('Processo 9860 - não permitir fazer a venda - no momento de adicionar produto, devem aparecer mensagens de aviso', () => {

        it.skip('1-Pedido de venda: produto 1869 0 0 (Venda local de produto sem saldo - sem entrega)', () => {
            
            produtoSemSaldo() // PRODUTO
            semSaldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()

            //Validando mensagem "Este produto não possui saldo na filial selecionada."
            cy.get('[ng-if="semSaldoCD"][style=""] > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')

            //Validando mensagem "Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda."
            cy.get('[ng-show="(itemGradeSelecionado && itemGradeSelecionado.valor > 0)"] > :nth-child(1) > .mensagem-erro-centralizada > p')
                .scrollIntoView()
                .wait(200)
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')

            //Validando botão Adicionar para Simulação
            cy.get('[ng-if="(localSaldoSelecionado && itemGradeSelecionado && validaEstoqueFilial(itemGradeSelecionado.filial) && itemGradeSelecionado.valor > 0 && btnAdicionarLiberado) || semSaldoCD"] > .md-accent')
                .should('exist')
                .and('not.be.disabled')
                .and('contain',' Adicionar para Simulação')
        })
    })
})