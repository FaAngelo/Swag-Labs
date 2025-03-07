
Cypress.Commands.add('login', (username, password) => {
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('visitUrl',() =>{
    cy.visit('https://www.saucedemo.com/inventory.html', {
        failOnStatusCode: false
    });
})