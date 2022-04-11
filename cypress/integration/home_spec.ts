describe('Switch to Scheduling page', () => {
  it('Visit Scheduling page', () => {
    cy.visit('/');
    cy.contains('表格').click();
    cy.url().should('include', '/scheduling');
  });
});

export {};
