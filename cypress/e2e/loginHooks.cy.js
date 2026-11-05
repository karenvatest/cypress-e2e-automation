import LoginPage from "../pages/LoginPage"

describe('Login', () =>{
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('Should display login form', () => {
        loginPage.emailInput.should('be.visible');
        loginPage.passwordInput.should('be.visible');
    });

    it('Should login successfully', () =>{
        cy.fixture('loginData').then((data) => {
            cy.login(data.validUser.email, data.validUser.password);
        });

        loginPage.userDisplay.should('be.visible');
    });

    it('Should show error with invalid credentials', () => {
        cy.fixture('loginData').then((data) => {
            cy.login(data.invalidUser.email, data.invalidUser.password);
        });
        loginPage.userNotDisplay.should('be.visible').and('contain.text', 'Invalid email id and password');
    });
});