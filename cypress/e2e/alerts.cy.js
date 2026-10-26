describe('Alerts', () =>{

    // TC_01: Verify custom alert 
    it('Should display the alert message correctly', () =>{
        cy.visit('https://qaplayground.com/practice/alerts-dialogs');
        cy.get('[data-testid="open-info-dialog"]').click();
        cy.get('[data-testid="info-alert-dialog"]').should('contain','Your session will expire in 30 minutes. Please save your work before the session ends.');
        cy.get('[data-testid="info-dialog-ok-btn"]').click();
        cy.get('[data-testid="result-s01"]').should('have.text', 'Info dialog dismissed');
    });

    // TC_02: Verify confirm alert
    it('Should confirm the dialog correctly', () => {
        cy.visit('https://qapracticehub.com/?utm_source=chatgpt.com#alerts');
        cy.window().then((win) => {
            cy.stub(win, 'confirm').as('confirmacion').returns(true); 
        });
        cy.get('[data-testid="btn-confirm"]').click();
        cy.get('[data-testid="alert-output"]').should('have.text', 'Confirm result: Accepted');
    });

    // TC_03: Verify cancel alert
    it('Should cancel the dialog correctly', () => {
        cy.visit('https://qapracticehub.com/?utm_source=chatgpt.com#alerts');
        cy.window().then((win) => {
            cy.stub(win, 'confirm').as('confirmacion').returns(false); 
        });
        cy.get('[data-testid="btn-confirm"]').click();
        cy.get('[data-testid="alert-output"]').should('have.text', 'Confirm result: Cancelled');
    });

    // TC_04: Verify prompt dialog
    it('Should handle the prompt dialog correctly', () =>{
        cy.visit('https://qapracticehub.com/?utm_source=chatgpt.com#alerts');
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Karen'); 
        });
        cy.get('[data-testid="btn-prompt"]').click();
        cy.get('[data-testid="alert-output"]').should('have.text', 'Prompt without validation — entered: Karen');
    });
    
})