describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('/');
    cy.contains('表格').click();
    cy.url().should('include', '/scheduling');
  });
});

export {};
