export class Home 
{ 
    
      validateHamburgerButton() {
        cy.get('#open-navigation-menu-mobile').should("be.visible");
      }
  
    
      validateLogoutButton(button) {
        cy.get(button).scrollIntoView().should("be.visible");
        cy.get(button).should("be.visible");
      }
}