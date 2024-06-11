import { Home } from "../pages/home";

const Homepage = new Home();



Cypress.Commands.add('login', (email, password) => {
  cy.get("#user_email").type(email); 
  cy.get("#user_password").type(password);
  cy.get('.eckniwg2').click();
  });

  Cypress.Commands.add('logout', (button) => {
    cy.get('#open-navigation-menu-mobile').click();
    Homepage.validateLogoutButton(button);
    cy.get(button).click();
    });