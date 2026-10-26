describe("Login", () =>{

    // TC_Basic_01: Verify login with valid credentials
    it("Should login successfully with valid credentials", () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').type('user@premiumbank.com');
        cy.get('#login-password').type('Bank@123');
        cy.get('#login-submit').click();
        cy.contains('Login Successful! Welcome to Premium Banking.').should('be.visible');
    });

    // TC_Basic_02: Verify login with invalid credentials
    it("Should show an error with invalid credentials", () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').type('user1@premiumbank.com');
        cy.get('#login-password').type('Bank@1');
        cy.get('#login-submit').click();
        cy.contains('Invalid email id and password').should('be.visible');
    });

    // TC_Basic_03: Check UI elements of the login page
    it('Should display login form correctly', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').should('be.visible');
        cy.get('#login-password').should('be.visible');
        cy.get('#login-remember').should('be.visible').should('be.enabled');
        cy.get('#login-submit').should('be.visible').should('be.enabled');
    });

    // TC_Basic_04: Verify login button is enable and validate error message when fields are empty
    it('Should show validation when login fields are empty', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-submit').click();
        cy.contains('Email and Password are required').should('be.visible');

    });

    // TC_Basic_05: Verify remeber me checkbox is no checked and validate that able to checked
    it('Should select Remember Me checkbox', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-remember').should('not.be.checked');
        cy.get('#login-remember').check();
        cy.get('#login-remember').should('be.checked');
    });

    // TC_Basic_06: Verify login with valid credentials but pressing enter key
    it('Should login using Enter key', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').type('user@premiumbank.com');
        cy.get('#login-password').type('Bank@123{enter}');
        cy.contains('Login Successful! Welcome to Premium Banking.').should('be.visible');
    });

    // TC_Basic_07: Verify password field is masked
    it('Should show masked password with dots', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-password').type('Bank@123').should('have.attr', 'type', 'password');
    });

    // TC_Basic_08: Verify Error message when 'Password is required'
    it('Should show validation when password field is empty', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').type('user@premiumbank.com');
        cy.get('#login-submit').click();
        cy.contains('Password is required').should('be.visible');
    });

    // TC_Basic_09: Verify error message when email id entered in invalid format
    it('Should show validation when email input have invalid format ', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').type('userpremiumbank.com');
        cy.get('#login-submit').click();
        cy.on('window:alert', (message) => {
            expect(message).to.equal("Please include an '@' in the email address. 'abc123' is missing '@'");
        });    
    });

    // TC_Basic_10: Verify that the inputs can be cleaned
    it('Should clear login form fields', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').type('user@premiumbank.com');
        cy.get('#login-password').type('Bank@123');
        cy.get('#login-email').clear();
        cy.get('#login-password').clear();
        cy.get('#login-email').should('have.value', '');
        cy.get('#login-password').should('have.value', '');
    });

    

    
})