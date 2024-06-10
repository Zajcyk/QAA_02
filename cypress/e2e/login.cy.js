describe('Login Tests', () => {
  it('Test 1 - Log in with user888@gmail.com', () => {
    cy.visit('https://www.edu.goit.global/account/login');
    cy.get("#user_email").type("user888@gmail.com"); 
    cy.get("#user_password").type("1234567890"); 
    cy.get('.eckniwg2').click();
    cy.get('#open-navigation-menu-mobile').click();
    cy.get(':nth-child(12) > .next-bve2vl').click();
  });

  //it('Test 2 - Log in with testowyqa@qa.team', () => {
    // cy.visit('/account/login');

    // // Użyj polecenia logowania
    // cy.login('testowyqa@qa.team', 'QA!automation-1');

    // // Znajdź przycisk w prawym górnym rogu
    // cy.get('button[aria-label="Profile"]').click();

    // // Znajdź i kliknij przycisk Log out
    // cy.contains('Log out').click();

    // // Sprawdź, czy wróciło do strony logowania
    // cy.url().should('include', '/account/login');
 // });
});