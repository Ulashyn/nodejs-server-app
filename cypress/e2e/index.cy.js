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

})
