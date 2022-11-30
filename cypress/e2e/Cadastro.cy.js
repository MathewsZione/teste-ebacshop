///<reference types= "cypress"/>

var faker= require('faker');
const Faker = require('faker/lib');

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer cadastro com sucesso', () => {
        
        let emailfaker= faker.internet.email()
        let senhafaker= faker.internet.password()
        let nomefaker= faker.name.firstName()
        let sobrenomefaker= faker.name.lastName()

        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type(senhafaker)
        cy.get(':nth-child(4) > .button').click()
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(sobrenomefaker)
        cy.get('#account_display_name').type(nomefaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });






});