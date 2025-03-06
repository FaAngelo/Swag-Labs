/// <reference types="cypress" />

describe('Login' , ()=>{
    // beforeEach(()=>{
    //     cy.visit('/')
    // })
    it('Página visível', ()=>{
        cy.title().should('eq' , 'Swag Labs')
        cy.get('#user-name').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('#login-button').should('be.visible')
        cy.get('#login_credentials').should('be.visible')
        cy.get('.login_password').should('be.visible')
    })
    it('Login com usuario e senha válidos',()=>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('be.equal','https://www.saucedemo.com/inventory.html')
    })
    it('Login com usuario e senha inválidos',()=>{
        cy.get('#user-name').type('testes')
        cy.get('#password').type('teste123')
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')
    })
    it('Login com usuario e senha vazios',()=>{
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')
    })
    it.only('Acesso ao sistema sem realizar login', () => {
        // Tenta acessar diretamente a página /inventory.html
        cy.visit('https://www.saucedemo.com/inventory.html', {
            failOnStatusCode: false
        });

        // Verifica se a URL é redirecionada para a tela de login
        cy.url().should('include', '/');
    });
    
})