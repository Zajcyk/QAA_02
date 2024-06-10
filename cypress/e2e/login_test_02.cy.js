describe('Login Tests', () => {
  it('Test 1 - Log in with testowyqa@qa.team', () => {
    cy.visit('https://www.edu.goit.global/account/login');
    cy.get("#user_email").type("testowyqa@qa.team"); 
    cy.get("#user_password").type("QA!automation-1"); 
    cy.get('.eckniwg2').click();
    cy.get('#open-navigation-menu-mobile').click();
    cy.get(':nth-child(9) > .next-bve2vl').click();
  });

});