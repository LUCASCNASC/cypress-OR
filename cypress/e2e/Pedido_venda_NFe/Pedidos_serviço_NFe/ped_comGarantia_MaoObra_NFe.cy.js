import { saldodisponivel, clienteComRota } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo, escolherProdutoPesquisaNormalPrimeiro, escolherVoltagemProdutoNormalPrimeiro, 
         escolherProdutoPesquisaNormalSegundo, escolherVoltagemProdutoNormalSegundo, clicarAddProdutoNormalPrimeiro,
         clicarAddProdutoNormalSegundo } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { garantiaNaoSepara, garantiaSeparaMesmoProcesso, garantiaSeparaTituloProcessoDiferente, maoObraDestacaNãoSepara, 
         maoObraNaoDestacaSeparaMesmoProcesso, maoObraNaoDestacaSeparaProcessoDiferente, modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedidos com Garantia e Mão de Obra', () => {

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
        escolherVoltagemProdutoNormalPrimeiro()
        clicarAddProdutoNormalPrimeiro()
        modalServicosVinculados()
    })

    context('Sem entrega/processo 9860 - caminho feliz', () => {
    
        it.skip('1. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {
            
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
        })

        it.skip('2. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()
        })

        it.skip('3. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
        })

        it.skip('4. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            okServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
        })

        it.skip('5. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
        })

        it.skip('6. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            okServicosVinculados() //SERVIÇOS
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
        })

        it.skip('7. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
        })

        it.skip('8. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA
            avancarParaParcelas() 
        })

        it.skip('9. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
        })

        it.skip('10. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
        })

        it.skip('11. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
        })

        it.skip('12. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
        })

        it.skip('13. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
        })

        it.skip('14. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
        })

        it.skip('15. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
        })

        it.skip('16. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()  
        })

        it.skip('17. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaTituloProcessoDiferente//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente()
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
        })

        it.skip('18. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente()
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it.skip('19. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()  
        })

        it.skip('20. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('21. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('22. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('23. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('24. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('25. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('26. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('27. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('28. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('29. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('30. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('31. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('32. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })

        it.skip('33. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega() 
        })

        it.skip('34. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega() 
        })

        it.skip('35. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaTituloProcessoDiferente //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente()
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
        })  

        it.skip('36. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente()
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo()
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
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