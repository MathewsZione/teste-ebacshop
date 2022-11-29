///<reference types= "cypress"/>

describe('Deve fazer login com sucesso', () => {
    
beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    
});

it('Deve fazer login com sucesso', () => {
cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('#rememberme').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Jenkins')
});

it('Deve exibir uma mensagem de erro ao inserir usuario incorreto', () => {
cy.get('#username').type('fulano_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('#rememberme').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail')
});

it.only('Deve exibir uma mensagem de erro ao inserir senha incorretamente', () => {
cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('123456')
    cy.get('#rememberme').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'a senha fornecida')
});

});
