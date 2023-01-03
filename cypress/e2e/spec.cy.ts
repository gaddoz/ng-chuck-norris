it('loads homepage, open and close modal one and two', () => {
  cy.visit('/');
  cy.contains('ng-chuck-norris').should('be.visible');
  cy.contains('button', ' Sample Clarity Modal One ')
    .should('be.visible')
    .click();
  cy.contains('h3', 'Modal One').should('be.visible');
  cy.contains('button', ' Ok ').should('be.visible').click();
  cy.contains('h3', 'Modal One').should('not.exist');
  cy.contains('button', ' Sample Clarity Modal Two ')
    .should('be.visible')
    .click();
  cy.contains('h3', 'Modal Two').should('be.visible');
  cy.contains('button', ' Ok ').should('be.visible').click();
  cy.contains('h3', 'Modal Two').should('not.exist');
});
