import { saldodisponivel, clienteComRota, composicaoDesteKit, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto }  from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo, produtoKitPrimeiro } from '../../../support/produtos_pedidos/prd_normal.js';
import { okPedidoGerado, iconeMenuOpcoesPed, pedidosPendentesOpcaoMenuPed, escolherPedidoPendente, clicarDetalhes, clicarEditarPedido, 
         menssCarregarPedAlterar, clicarAumentoQtdProduto, clicarRemoverProduto, clicarFecharIntencaoCompra, removerFormaPagamento, 
         adicionarEntrega, adicionarServico, botaoGerarParcelasAlterar, escolherFormaPagamentoPrincipalAlterar } from '../../../support/para_pedidos/para_alterar_pedido.js';
import { arrastarFormaPagamento } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { garantiaSeparaMesmoProcesso, modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherEntradaFormaPagamento, clicarGerarPagamento, escolherUmaParcelaPagamento,
         escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal, escolherSegundaFormaPagamento } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { clicarFinalizarPedido, validarPedidoGerado, validarPedidoAlteradoSucesso } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/processos/processo_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega, avancarParaParcelasAlterar,
         avancarFinalAlterar, avancarParaTransportadoraAlterar, avancarParcelasEntregaAlterar } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo, tirarEntregaTerceiro } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';

describe('Gerar pedido normal, entrar alterando, modificar e salvar.', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it.skip('1. Gerar pedido, alterar aumentando quantidade de produto e adicionando outro produto e um kit.', () => {

            produtoNormalPrimeiro() //PESQUISA PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA PRODUTO
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()

            clicarAumentoQtdProduto() //AUMENTANDO QUANTIDADE DO PRODUTO

            produtoNormalPrimeiro() //PESQUISA PRODUTO - SEGUNDO
            escolherProdutoPesquisa()//ESCOLHER PRODUTO - SEGUNDO
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(500)

            produtoKitPrimeiro() //PESQUISA PRODUTO - KIT
            escolherProdutoPesquisa() //ESCOLHER PRODUTO - KIT
            clicarVoltagemProduto() //VOLTAGEM
            composicaoDesteKit()
            addProduto()
            okServicosVinculados()
            tirarEntregaTerceiro()
            avancarParaParcelasAlterar()

            botaoGerarParcelasAlterar() //GERAR PARCELAS
            escolherFormaPagamentoPrincipalAlterar()
            escolherDuasParcelaPagamento()
            avancarFinalAlterar()
            clicarFinalizarPedido() //PROCESSO INCLUSÃO
            validarPedidoAlteradoSucesso()
        })

        it.skip('2. Gerar pedido, alterar removendo o produto e adicionando outros dois.', () => {

            produtoNormalPrimeiro() //PESQUISA PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA PRODUTO
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed()  //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()

            clicarRemoverProduto()
            clicarFecharIntencaoCompra()

            produtoNormalSegundo() //PESQUISA PRODUTO - SEGUNDO 
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA PRODUTO

            produtoNormalPrimeiro() //PESQUISA PRODUTO - TERCEIRO
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA PRODUTO
            avancarParaParcelasAlterar()

            botaoGerarParcelasAlterar() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipalAlterar() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinalAlterar()
            clicarFinalizarPedido() //FINAL PEDIDO
            validarPedidoAlteradoSucesso()
        })

        //erro de inconsistencia quando colocamos o serviço de entrega
        it.skip('3. Gerar pedido, alterar colocando garantia e entrega.', () => {

            produtoNormalPrimeiro() //PESQUISA PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA PRODUTO
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //FINAL PEDIDO
            validarPedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            adicionarEntrega() 
            adicionarServico()
            garantiaSeparaMesmoProcesso()
            okServicosVinculados()
            // avancarParaTransportadora()
            // avancarParcelasEntrega()
            // botaoGerarParcelasAlterar() //GERAR PARCELAS
            // carregandoFormaPagamento()
            // escolherFormaPagamentoPrincipalAlterar()
            // escolherDuasParcelaPagamento()
            // avancarFinalAlterar()
            // clicarFinalizarPedido() //RESUMO
            // validarPedidoAlteradoSucesso()
            
        })
    })

    context('Com entrega/ processo 9860 - caminho feliz', () => {

        it.skip('4. Gerar pedido com frete, alterar forma de pagamento.', () => {
                      
            produtoNormalPrimeiro() //PESQUISA PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados() //VOLTAGEM
            okServicosVinculados()
            avancarParaTransportadora() //TRANSPORTADORA
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //FINAL PEDIDO
            validarPedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            avancarParaTransportadoraAlterar()
            avancarParcelasEntregaAlterar()
            arrastarFormaPagamento() //ARRASTAR PARA REMOVER FORMA DE PAGAMENTO ANTIGA
            removerFormaPagamento()

            botaoGerarParcelasAlterar() //GERAR PARCELAS
            escolherSegundaFormaPagamento() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinalAlterar()
            clicarFinalizarPedido() //FINAL PEDIDO
            validarPedidoAlteradoSucesso()
        })
    })
})