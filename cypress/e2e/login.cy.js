/// <reference types="cypress" />
// @ts-nocheck

describe('Login' , ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Página visível', ()=>{
        cy.title().should('eq' , 'Swag Labs')
        cy.get('#user-name').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('#login-button').should('be.visible')
        cy.get('#login_credentials').should('be.visible')
        cy.get('.login_password').should('be.visible')
    })
    it('Login com usuario e senha válidos',()=>{
        cy.login('standard_user', 'secret_sauce')
        cy.url().should('be.equal','https://www.saucedemo.com/inventory.html')
    })
    it.only('Login com usuario e senha inválidos',()=>{
        cy.login('teste', 'teste123')
        cy.get('.error-button').should('be.visible')
    })
    it('Login com usuario e senha vazios',()=>{
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')
    })
    it.only('Acesso ao sistema sem realizar login', () => {
        // Tenta acessar diretamente a página /inventory.html
        cy.visitUrl()

        // Verifica se a URL é redirecionada para a tela de login
        cy.url().should('include', '/');
    });
    
})