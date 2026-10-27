class LoginPage{
    // Selectors
    get emailInput(){
        return cy.get('#login-email');
    }
    get passwordInput(){
        return cy.get('#login-password');
    }
    get remeberCheck(){
        return cy.get('#login-remember');
    }
    get loginButton(){
        return cy.get('#login-submit');
    }
    get userDisplay(){
        return cy.get('#login-success');
    }
    get userNotDisplay(){
        return cy.get('#login-error');
    }

    // Actions
    visit(){
        cy.visit('https://www.qapractice.com/practice-login-form');
    }
    enterEmail(email){
        this.emailInput.type(email);
    }
    enterPassword(password){
        this.passwordInput.type(password);
    }
    pressEnter() {
        this.passwordInput.type('{enter}');
    }

    clearLoginForm() {
        this.emailInput.clear();
        this.passwordInput.clear();
    }
    clickLogin(){
        this.loginButton.click();
    }
    clickCheckbox(){
        this.remeberCheck.check();
    }
    validateAlertMessage(expectedMessage) {
        cy.on('window:alert', (message) => {
            expect(message).to.equal(expectedMessage);
        });
    }
    
    login(email, password){
        this.visit();
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLogin();
    }
    loginUsingEnter(email, password) {
        this.visit();
        this.enterEmail(email);
        this.enterPassword(password);
        this.pressEnter();
    }

}   
export default LoginPage;