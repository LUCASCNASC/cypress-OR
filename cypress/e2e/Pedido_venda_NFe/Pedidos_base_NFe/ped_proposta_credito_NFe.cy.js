import { clicarGerarParcelas, carregandoFormaPagamento, escolherUmaParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagaPropCredito } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';
import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { GeralProduto } from '../../../../pages/produtos/gerais_pedido.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'

describe('Gerar pedido com proposta de crédito', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.comRota()
        Produto.primeiro() //PRODUTO
        ValidarSaldo.comSaldo()
        GeralProduto.escolherProdutoPesquisa()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0 - (Pedido de venda sem entrega, com proposta de crédito.)', () => {

            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.primeiro() //ENTREGA
            AvancarNormal.paraParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagaPropCredito()
            escolherUmaParcelaPagamento()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPropCreditoGerada()
            FinalizarPed.validarPedGerado()
        })
    })
})