class LoginPageEven{
    // Selectors
    get emailInput(){
        return cy.get('#email');
    }
    get passwordInput(){
        return cy.get('#password');
    }
    get loginButton(){
        return cy.get('#login-btn');
    }
    get userEmailDisplay(){
        return cy.get('[data-testid="user-email-display"]');
    }

    //Actions
    visit(){
        cy.visit('/login');
    }
    enterEmail(email){
        this.emailInput.type(email);
    }
    enterPassword(password){
        this.passwordInput.type(password);
    }
    clickLogin(){
        this.loginButton.click();
    }
    login(email, password){
        this.visit();
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLogin();
    }
}

export default LoginPageEven;