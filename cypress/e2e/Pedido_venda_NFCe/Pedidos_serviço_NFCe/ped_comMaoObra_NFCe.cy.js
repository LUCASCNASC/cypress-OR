import { saldodisponivel, clienteComRota, clicarAdicionarProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiroNFCe, produtoNormalSegundoNFCe, escolherProdutoPesquisaNormalPrimeiroNFCe, escolherVoltagemProdutoNormalPrimeiroNFCe, 
         escolherProdutoPesquisaNormalSegundoNFCe, escolherVoltagemProdutoNormalSegundoNFCe } from '../../../support/para_pedidos_NFCe/apenasNFCe_produtos_pedidos.js';
import { maoObraDestacaNãoSepara, maoObraNaoDestacaSeparaMesmoProcesso, maoObraNaoDestacaSeparaProcessoDiferente, modalServicosVinculados, 
         okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsRotaTransp, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedidos com Mão de obra', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFCe()
        clienteComRota()
        cy.wait(500)
        produtoNormalPrimeiroNFCe() //PRODUTO
        saldodisponivel()
        escolherProdutoPesquisaNormalPrimeiroNFCe()
        cy.wait(200)
        escolherVoltagemProdutoNormalPrimeiroNFCe()
        clicarAdicionarProduto()
        cy.wait(500)
        modalServicosVinculados()
    })

    context('Com entrega/processo 9890 - caminho feliz', () => {

        it('7-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título)', () => {
    
            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega() 
        })
        
        it('8-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNFCe() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundoNFCe()
            cy.wait(800)
            escolherVoltagemProdutoNormalSegundoNFCe()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('9-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega() 
        })

        it('10-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNFCe() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundoNFCe()
            cy.wait(800)
            escolherVoltagemProdutoNormalSegundoNFCe()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTP
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('11-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {
    
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega() 
        })   

        it('12-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNFCe() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundoNFCe()
            cy.wait(800)
            escolherVoltagemProdutoNormalSegundoNFCe()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
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