/// <reference types = "cypress" />
// @ts-nocheck

describe('produtos', ()=>{
    beforeEach(()=>{
        cy.visitUrl()
        cy.login('standard_user', 'secret_sauce')
    })
    it.only('Acesso a tela de produtos',()=>{
        cy.get('.inventory_item').should('be.visible')
        cy.contains('Products')
    })
    it('Visibilidade de produtos',()=>{
        
    })
    it('Visibilidade de preços',()=>{

    })
    it('Adição de produtos ao carrinho',()=>{

    })
})
describe('Ações dentro do carrinho',()=>{
    beforeEach(()=>{
        cy.visitUrl()
        cy.login('standard_user', 'secret_sauce')
    })
    it('Produto adicionado no carrinho',()=>{

    })
    it('Remoção de produtos dentro do carrinho',()=>{

    })
    it('Retornar a tela de produtos',()=>{

    })
    it('Prosseguir para tela de finalizar compras', ()=>{

    })
})
describe('Finalização de compras',()=>{
    it('Solicitação de dados para finalizar compras',()=>{

    })
    it('Campos vazios',()=>{

    })
    it('Primeiro nome vazio',()=>{
        
    })
    it('Segundo nome vazio',()=>{
        
    })
    it('Cep vazio',()=>{

    })
    it('Campos preenchidos corretamente',()=>{

    })
    it('Limitação de caracteres',()=>{

    })
    it('Redirecionamento dos botões continue e cancel',()=>{

    })
    describe('Menu de opções ',()=>{
        it('Visualização de todos os itens',()=>{

        })
        it('Informações sobre',()=>{

        })
        it('Sair do Swag Labs',()=>{

        })
        it('Redefinir estado do aplicativo',()=>{

        })

    })
})