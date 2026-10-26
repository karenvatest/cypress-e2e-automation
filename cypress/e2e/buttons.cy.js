describe('Buttons', () =>{

    // TC_01: Verify Button is clickable
    it('Should navigate to home page', () =>{
        cy.visit('https://qaplayground.com/practice/buttons');
        cy.get('#navigateHomeBtn').should('be.visible').and('be.enabled');
        cy.get('#navigateHomeBtn').click();
        cy.get('[data-testid="result-s01"]') .should('contain', 'Navigated to Home Page').and('be.visible');
    });

    // TC_02: Verify Double-click button triggers a double-click action
    it('Should execute double click correctly', () =>{
        cy.visit('https://qaplayground.com/practice/buttons');
        cy.get('[data-testid="btn-double-click"]').should('be.visible').and('be.enabled');
        cy.get('[data-testid="btn-double-click"]').dblclick();
        cy.get('[data-testid="result-s07"]').should('contain', 'Double clicked!').and('be.visible');
    });

    // TC_03: Verify disabled button cannot be clicked
    it('Should verify disabled button', () =>{
        cy.visit('https://qaplayground.com/practice/buttons');
        cy.get('[data-testid="btn-disabled"]').should('be.visible').and('be.disabled');
        cy.get('[data-testid="btn-disabled"]').should('not.be.enabled');
    });

    // TC_04: Verify Right-click button opens the context action
    it('Should execute right click correctly', () =>{
        cy.visit('https://qaplayground.com/practice/buttons');
        cy.get('[data-testid="btn-right-click"]').should('be.visible').and('be.enabled');
        cy.get('[data-testid="btn-right-click"]').rightclick();
        cy.get('[data-testid="result-s08"]').should('contain', 'Context menu triggered!').and('be.visible');
    });

    // TC_05: Verify Click-and-hold completes after 1.5 seconds
    it('Should execute click and hold correctly', () =>{
        cy.visit('https://qaplayground.com/practice/buttons');
        cy.get('[data-testid="btn-click-hold"]').should('be.visible').and('be.enabled');
        cy.get('[data-testid="btn-click-hold"]').click();
        cy.get('[data-testid="result-s06"]').should('contain', 'Released too early - hold for 1.5s').and('be.visible');
        
    });

    // TC_06: Verify Get Button Height & Width
    it('Should verify size of button', () =>{
        cy.visit('https://qaplayground.com/practice/buttons');
        cy.get('[data-testid="btn-get-size"]').should('be.visible').and('be.enabled');
        cy.get('[data-testid="btn-get-size"]').should('have.css', 'width', '175.21875px').and('have.css', 'height', '29px');
        cy.get('[data-testid="btn-get-size"]').click();
        cy.get('[data-testid="result-s04"]').should('contain', 'W: 175px, H: 29px').and('be.visible');
    });

    // TC_07: Verify Get Button Color
    it('Should verify the color of button', () =>{
        cy.visit('https://qaplayground.com/practice/buttons');
        cy.get('[data-testid="btn-get-color"]').should('be.visible').and('be.enabled');
        cy.get('[data-testid="btn-get-color"]').should('have.css', 'background-color', 'rgb(245, 243, 255)');
        cy.get('[data-testid="btn-get-color"]').click();
        cy.get('[data-testid="result-s03"]').should('contain', 'Background: rgb(245, 243, 255)').and('be.visible');
    });


    

    

    
})