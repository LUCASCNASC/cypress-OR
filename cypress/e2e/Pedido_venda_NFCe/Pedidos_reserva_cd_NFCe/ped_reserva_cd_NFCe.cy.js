import { saldodisponivel, clienteComRota, clicarAdicionarProduto, escolherProdutoPesquisa, escolherVoltagemProduto, saldoCDDisponivel} from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoCDPrimeiroNFCe, produtoNormalSegundoNFCe, escolherProdutoCDPrimeiroNFCe, escolherVoltagemProdutoCDPrimeiroNFCe } from '../../../support/para_pedidos_NFCe/apenasNFCe_produtos_pedidos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento, 
         escolherProdutoPesquisaNormalSegundoNFCe, escolherVoltagemProdutoNormalSegundoNFCe } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsRotaTransp, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido com reserva no CD - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFCe()
        clienteComRota()
        cy.wait(500)
    })

    context('Com frete/ processo 9890 - caminho feliz', () => {

        it('3-Venda: produto 1880 0 0 - (Venda local de produto com saldo só no CD - com entrega)', () => {
            
            produtoCDPrimeiroNFCe() //PRODUTO
            saldoCDDisponivel()
            escolherProdutoCDPrimeiroNFCe()
            cy.wait(200)
            escolherVoltagemProdutoCDPrimeiroNFCe()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it('4-Venda: produtos 1880 0 0 (reserva CD) e 1870 0 0 (saldo local) - (Venda local de 1 produto com saldo local + 1 produto com saldo no CD - com entrega)', () => {
            
            produtoCDPrimeiroNFCe() //PRODUTO
            saldoCDDisponivel()
            escolherProdutoCDPrimeiroNFCe()
            cy.wait(200)
            escolherVoltagemProdutoCDPrimeiroNFCe() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            produtoNormalSegundoNFCe() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundoNFCe()
            cy.wait(800)
            escolherVoltagemProdutoNormalSegundoNFCe()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})