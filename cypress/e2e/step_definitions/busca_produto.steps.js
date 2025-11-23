const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que estou na página inicial do RePlayce", () => {
  cy.visit("/");
});

Given('existem produtos cadastrados com os nomes {string} e {string}', (nome1, nome2) => {
  cy.intercept('GET', '/api/produtos*', { fixture: 'produtos.json' }).as('mockProdutos');
  cy.reload();
  cy.wait('@mockProdutos');
});

When('eu digito {string} na barra de busca', (texto) => {
  cy.get('[data-cy=search-input]').clear().type(texto);
});

When('pressiono Enter', () => {
  cy.get('[data-cy=search-input]').type('{enter}');
});

Then('devo ver {string} na lista de resultados', (nome) => {
  cy.contains('[data-cy=produto-nome]', nome).should('be.visible');
});

Then('não devo ver {string} nos resultados filtrados', (nome) => {
  cy.contains('[data-cy=produto-nome]', nome).should('not.exist');
});
