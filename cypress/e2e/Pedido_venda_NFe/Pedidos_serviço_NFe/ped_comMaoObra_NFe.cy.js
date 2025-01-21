import { saldodisponivel, clienteComRota, clicarAdicionarProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo, escolherProdutoPesquisaNormalPrimeiro, escolherVoltagemProdutoNormalPrimeiro, 
         escolherProdutoPesquisaNormalSegundo, escolherVoltagemProdutoNormalSegundo } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { maoObraDestacaNãoSepara, maoObraNaoDestacaSeparaMesmoProcesso, maoObraNaoDestacaSeparaProcessoDiferente, modalServicosVinculados, 
         okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedidos com Mão de obra', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
        cy.wait(500)
        produtoNormalPrimeiro() //PRODUTO
        saldodisponivel()
        escolherProdutoPesquisaNormalPrimeiro()
        cy.wait(200)
        escolherVoltagemProdutoNormalPrimeiro()
        clicarAdicionarProduto()
        cy.wait(500)
        modalServicosVinculados()
    })
  
    context('Sem entrega/processo 9860 - caminho feliz', () => {

        it.skip('1-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título', () => {
    
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas() 
        })

        it.skip('2-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {

            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            produtoNormalSegundo() //PRODUTO - SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            cy.wait(800)
            escolherVoltagemProdutoNormalSegundo()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas()
        })
    
        it.skip('3-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()  
        })

        it.skip('4-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            produtoNormalSegundo() //PRODUTO NORMAL
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            cy.wait(800)
            escolherVoltagemProdutoNormalSegundo()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA- SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas() 
        })
    
        it.skip('5-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {

            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas() 
        })

        it.skip('6-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {

            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            cy.wait(800)
            escolherVoltagemProdutoNormalSegundo()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas() 
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it.skip('7-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título)', () => {
    
            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })
        
        it.skip('8-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            cy.wait(800)
            escolherVoltagemProdutoNormalSegundo()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('9-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('10-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            cy.wait(800)
            escolherVoltagemProdutoNormalSegundo()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTP
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('11-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {
    
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })   

        it.skip('12-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            cy.wait(800)
            escolherVoltagemProdutoNormalSegundo()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })
    })

    afterEach(() => {
        botaoGerarParcelas() //GERAR PARCELAS
        carregandoFormaPagamento()
        escolherFormaPagamentoPrincipal()
        cy.wait(3000)
        escolherDuasParcelaPagamento()
        cy.wait(400)
        avancarFinal()
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})