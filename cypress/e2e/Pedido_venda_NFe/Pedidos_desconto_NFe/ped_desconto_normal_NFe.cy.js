import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { PedDesconto } from '../../../../pages/para_pedidos/para_pedido_desconto.js'

describe('Gerar pedido de venda com desconto', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.withRoute()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1. Ped venda: produto 1912 0 0 com desconto Sub (-) / R$', () => {

            Produto.discountNumber() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            PedDesconto.clicarBotaoDesconto() //DESCONTO
            PedDesconto.validarModalSubSobre()
            PedDesconto.aplicarDescontoR$()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal()
            EscolherParcelaReceb.uma()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('2. Ped venda: produto 1913 0 0 com desconto Sub (-) / % (Porcentagem)', () => {

            Produto.discountPercentage() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            PedDesconto.clicarBotaoDesconto() //DESCONTO
            PedDesconto.validarModalSubSobre()
            PedDesconto.aplicarDescontoPorcentagem()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal()
            EscolherParcelaReceb.uma()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('3. Ped venda: produto 1914 0 0 com desconto Sub (-) / VALOR FIXO', () => {

            Produto.discountValueFixed() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            PedDesconto.clicarBotaoDesconto() //DESCONTO
            PedDesconto.validarModalSubSobre()
            PedDesconto.aplicarDescontoValorFixo()
            TirarEntrega.freightFirst
            () //ENTREGA
            AvancarNormal.toInstallments()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal()
            EscolherParcelaReceb.uma()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
})