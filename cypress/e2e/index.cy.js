/// <reference types="cypress" />

context('Index', () => {
  it('Should visit main page', () => {
    cy.visit('/');
  });
  it('Should visit about page', () => {
    cy.visit('/about');
    cy.url().should('include', '/about');
  });
  it('Should create blog post', () => {
    cy.visit('/new-post');
    cy.get('#title').type('Cypress test title');
    cy.get('#description').type('Cypress test description');
    cy.get('#content').type('Cypress test content');
    cy.get('#submit').click();
    cy.url().should('include', '/posts');
  });
  it('Should edit blog post', () => {
    cy.visit('/posts');
    cy.get('.uk-grid').get('.uk-button').contains('Read').first().click();
    cy.get('.uk-button').first().click();
    cy.get('#title').clear().type('Cypress test title edited');
    cy.get('#description').clear().type('Cypress test title edited');
    cy.get('#content').clear().type('Cypress test title edited (by cypress)');
    cy.get('#submit').click();
    cy.url().should('include', '/posts');
  });
  it('Should delete blog post', () => {
    cy.visit('/posts');
    cy.get('.uk-grid').get('.uk-button').contains('Read').first().click();
    cy.get('#delete').click();
    cy.get('.uk-modal-dialog').get('.uk-button').contains('Ok').click();
    cy.url().should('include', '/posts');
  });

})
