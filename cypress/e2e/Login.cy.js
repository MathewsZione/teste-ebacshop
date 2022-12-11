///<reference types= "cypress"/>

const perfil= require ('../fixtures/perfil.json')

describe('Deve fazer login com sucesso', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
    });

    it('Deve exibir uma mensagem de erro ao inserir usuario incorreto', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('fulano_ebac@teste.com')
        cy.get('#password').type(perfil.senha)
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha incorretamente', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type('123456')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'a senha fornecida')
    });

});
