import { saldodisponivel, clienteComRota, clicarAdicionarProduto, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoDescontoCifrao, produtoDescontoPercentual, produtoDescontoValorFixo } from '../../../support/para_pedidos_NFe/NFe_prd_normal.js';
import { clicarBotaoDesconto, validarModalSubSobre, aplicarDescontoR$, aplicarDescontoPorcentagem, aplicarDescontoValorFixo } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherUmaParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal} from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido de venda com desconto', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
        cy.wait(500)
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1. Ped venda: produto 1912 0 0 com desconto Sub (-) / R$', () => {

            produtoDescontoCifrao() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() 
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoR$()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('2. Ped venda: produto 1913 0 0 com desconto Sub (-) / % (Porcentagem)', () => {

            produtoDescontoPercentual() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() 
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoPorcentagem()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('3. Ped venda: produto 1914 0 0 com desconto Sub (-) / VALOR FIXO', () => {

            produtoDescontoValorFixo() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() 
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoValorFixo()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
})