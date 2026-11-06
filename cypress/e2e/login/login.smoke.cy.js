import LoginPage from "../../pages/LoginPage"

describe('Login', () =>{
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('Should display the login form', () => {
        loginPage.emailInput.should('be.visible');
        loginPage.passwordInput.should('be.visible');
        loginPage.loginButton.should('be.visible');
    });

    it('Should login successfully', () =>{
        cy.fixture('loginData').then((data) => {
            cy.login(data.validUser.email, data.validUser.password);
        });

        loginPage.userDisplay.should('be.visible');
    });

});