class RegisterPage {
    //Selectors
    get emailInput(){
        return cy.get('[data-testid="register-email"]');
    }
    get passwordInput(){
        return cy.get('[data-testid="register-password"]');
    }
    get confirmPasswordInput(){
        return cy.get('input[type="password"]').eq(1);
    }
    get registerButton(){
        return cy.get('[data-testid="register-btn"]');
    }
    get useremailDisplay(){
        return cy.get('[data-testid="user-email-display"]');
    }

    //Actions
    visit(){
       cy.visit('/login'); 
       cy.get('a[href="/register"]').click();
    }
    enterEmail(email){
        this.emailInput.type(email);
    }
    enterPassword(password){
        this.passwordInput.type(password);
    }
    enterConfirmPassword(password){
        this.confirmPasswordInput.type(password);
    }
    clickRegister(){
        this.registerButton.click();
    }
    register(email, password){
        this.visit();
        this.enterEmail(email);
        this.enterPassword(password);
        this.enterConfirmPassword(password);
        this.clickRegister();
    }
}

export default RegisterPage;