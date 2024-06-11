import { Login } from "../pages/login";
import { Home } from "../pages/home";


const LoginPage = new Login();
const Homepage = new Home();

describe('Login Tests', () => {
  it('Test 1 - Log in with user888@gmail.com', () => {
    // visit page
    LoginPage.navigate();
    // check title
    LoginPage.validateLoginTitle();
    // check inputs
    LoginPage.validateInputs();
    // check button
    LoginPage.validateButton();
    // check link
    LoginPage.validatePasswordLink();

    //login command
    cy.login("user888@gmail.com","1234567890")
    
// logout
    Homepage.validateHamburgerButton
    cy.logout(":nth-child(12) > .next-bve2vl")
  });
});