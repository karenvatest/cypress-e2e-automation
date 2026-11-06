import LoginPage from '../../pages/LoginPage';
describe("Login tests", () =>{
    const loginPage = new LoginPage();
    
    // TC_Basic_01: Verify login with valid credentials with fixtures
    it('Should login successfully using fixture data', () =>{
        loginPage.visit();
        cy.fixture('loginData').then((data) =>{
            cy.login(data.validUser.email, data.validUser.password);
        });
        cy.get('#login-success').should('be.visible').and('contain.text', 'Login Successful! Welcome to Premium Banking.');
    });

    it('Should invalid login using fixture data', () =>{
        cy.fixture('loginData').then((data) =>{
            cy.login(data.invalidUser.email, data.invalidUser.password);
        });
        cy.get('#login-error').should('be.visible').and('contain.text', 'Invalid email id and password');
    });

    // TC_Basic_01.2: Verify login with valid credentials with custom commands
    it('Should login successfully using a custom command', () => {
        cy.login('user@premiumbank.com', 'Bank@123');
        cy.get('#login-success').should('be.visible')
        .and('contain.text', 'Login Successful! Welcome to Premium Banking.');
    });

    // TC_Basic_01.3: Verify login with valid credentials with fixtures
    it("Should login successfully with valid credentials", () =>{
        loginPage.login('user@premiumbank.com', 'Bank@123');
        loginPage.userDisplay.contains('Login Successful! Welcome to Premium Banking.').should('be.visible');
    });

    // TC_Basic_01.4: Verify login with env
    it('Should load login URL from environment variables', () => {
        cy.log(Cypress.expose('loginUrl'));
        loginPage.visit();
        loginPage.emailInput.should('be.visible');
    });

    // TC_Basic_02: Verify login with invalid credentials
    it("Should show an error with invalid credentials", () =>{
        cy.fixture('loginData').then((data) => {
            cy.login(data.invalidUser.email, data.invalidUser.password);
        });
        loginPage.userNotDisplay.contains('Invalid email id and password').should('be.visible');
    });

    // TC_Basic_03: Check UI elements of the login page
    it('Should display login form correctly', () =>{
        loginPage.visit();
        loginPage.emailInput.should('be.visible');
        loginPage.passwordInput.should('be.visible');
        //loginPage.remeberCheck.should('be.visible').and('be.enabled');
        loginPage.loginButton.should('be.visible').and('be.enabled');
    });

    // TC_Basic_04: Verify login button is enable and validate error message when fields are empty
    it('Should show validation when login fields are empty', () =>{
        loginPage.visit();
        loginPage.clickLogin();
        loginPage.userNotDisplay.contains('Email and Password are required').should('be.visible');

    });

    // TC_Basic_05: Verify remeber me checkbox is no checked and validate that able to checked
    it('Should select Remember Me checkbox', () =>{
        loginPage.visit();
        loginPage.remeberCheck.should('not.be.checked');
        loginPage.clickCheckbox();
        loginPage.remeberCheck.should('be.checked');
    });

    // TC_Basic_06: Verify login with valid credentials but pressing enter key
    it('Should login using Enter key', () =>{
        cy.fixture('loginData').then((data) =>{
            loginPage.loginUsingEnter(data.validUser.email, data.validUser.password);
        });
        loginPage.userDisplay.contains('Login Successful! Welcome to Premium Banking.').should('be.visible');
    });

    // TC_Basic_07: Verify password field is masked
    it('Should show masked password with dots', () =>{
        loginPage.visit();
        cy.fixture('loginData').then((data) =>{
            loginPage.enterPassword(data.validUser.password);
        });
        loginPage.passwordInput.should('have.attr', 'type', 'password');
    });

    

    // TC_Basic_08: Verify Error message when 'Password is required'
    it('Should show validation when password field is empty', () =>{
        loginPage.visit();
        cy.fixture('loginData').then((data) =>{
            loginPage.enterEmail(data.validUser.email);
        });
        loginPage.clickLogin();
        loginPage.userNotDisplay.contains('Password is required').should('be.visible');
    });

    // TC_Basic_09: Verify error message when email id entered in invalid format
    it('Should show validation when email input have invalid format ', () =>{
        loginPage.visit();
        loginPage.enterEmail('userpremiumbank.com');
        loginPage.clickLogin();
        loginPage.validateAlertMessage("Please include an '@' in the email address. 'abc123' is missing '@'");
    });

    // TC_Basic_10: Verify that the inputs can be cleaned
    it('Should clear login form fields', () =>{
        loginPage.visit();
        cy.fixture('loginData').then((data) =>{
            loginPage.enterEmail(data.validUser.email);
            loginPage.enterPassword(data.invalidUser.password);
        });
        loginPage.clearLoginForm();
        loginPage.emailInput.should('have.value', '');
        loginPage.passwordInput.should('have.value', '');
    });
    
});