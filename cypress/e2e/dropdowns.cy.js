describe('Dropdowns', () =>{

    // TC_01: Verify default option on the dropdowns
    it('Should display the default dropdown option', () =>{
        cy.visit('https://lastest.cloud/playground/dropdowns');
        cy.get('[data-testid="native-select"]').should('contain', '— choose a browser —').and('be.visible');
        cy.get('[data-testid="native-select-status"]').should('contain', 'Nothing selected yet.').and('be.visible');
        cy.get('[data-testid="multi-select-status"]').should('contain', 'Nothing selected yet.').and('be.visible');
        cy.get('[data-testid="combobox-trigger"]').should('contain', 'Select a country…').and('be.visible');
        cy.get('[data-testid="combobox-status"]').should('contain', 'Nothing selected yet.').and('be.visible');
    });
  
    // TC_02: Verify pick a browser in the native select
    it('Should select an option from dropdown', () =>{
        cy.visit('https://lastest.cloud/playground/dropdowns');
        cy.get('#pg-native-select').should('be.visible').and('be.enabled');
        cy.get('#pg-native-select').select('Chrome');
        cy.get('[data-testid="native-select-status"]').should('contain', 'Selected value="chrome" label="Chrome"');
    });

    // TC_03: Verify multiple changes into browsers select
    it('Should change selected option correctly', () =>{
        cy.visit('https://lastest.cloud/playground/dropdowns');
        cy.get('#pg-native-select').should('be.visible').and('be.enabled');

        const browsers = [
            { label: 'Chrome', value: 'chrome' },
            { label: 'Firefox', value: 'firefox' },
            { label: 'Safari', value: 'safari' },
            { label: 'Edge', value: 'edge' }
        ];

        for (let i = 0; i < browsers.length; i++) {

            cy.get('#pg-native-select').select(browsers[i].label);
            cy.get('[data-testid="native-select-status"]').should(
                'contain',
                `Selected value="${browsers[i].value}" label="${browsers[i].label}"`
            );
        }
    });

    // TC_04: Verify choose a country in the combobox
    it('Should select dropdown option using keyboard', () =>{
        cy.visit('https://lastest.cloud/playground/dropdowns');
        cy.get('[data-testid="combobox-trigger"]').should('be.visible').and('be.enabled');
        cy.get('[data-testid="combobox-trigger"]').focus().type('{downarrow}{downarrow}{downarrow}{enter}');
        cy.get('[data-testid="combobox-status"]').should('contain', 'Selected value="canada" label="Canada"');
    });

     // TC_05: Verify zero matches in the combobox
    it('Should type into the combobox to zero matches', () =>{
        cy.visit('https://lastest.cloud/playground/dropdowns');
        cy.get('[data-testid="combobox-trigger"]').should('be.visible').and('be.enabled');
        cy.get('[data-testid="combobox-trigger"]').click();
        cy.get('[data-testid="combobox-input"]').focus().type('0 {enter}');
        cy.get('.pg-help').should('have.text', 'No matches for "0 "');
    });
    
});