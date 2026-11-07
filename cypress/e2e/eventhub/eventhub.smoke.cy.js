import LoginPageEven from '../../pages/LoginPageEven';
import RegisterPage from '../../pages/RegisterPage';

describe('Smoke test', () =>{
    const LoginPage = new LoginPageEven();
    const RegistPage = new RegisterPage();

    // Verify the user registration successfully
    it('TC-01 — User Registration', () =>{
        const uniqueEmail = `test${Date.now()}@testing.com`;
        cy.fixture('eventHubData').then((data) =>{
            RegistPage.register(uniqueEmail, data.registration.password);
            RegistPage.useremailDisplay.should('be.visible').and('have.text', uniqueEmail);
        });
    });

    // Verify login successfully
    it('TC-02 — Login', () =>{
        cy.fixture('eventHubData').then((data) =>{
            LoginPage.login(data.validUser.email, data.validUser.password);
            LoginPage.userEmailDisplay.should('be.visible').and('have.text', data.validUser.email);
        });
    });
});