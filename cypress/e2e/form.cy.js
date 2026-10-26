describe("Forms", () =>{
    // TC_Basic_01: Check UI elements of the forms page
    it('Should display form fields correctly', () =>{
        cy.visit('https://www.qapractice.com/practice-forms');
        cy.get('#forms-country').should('be.visible').and('be.enabled');
        cy.get('#forms-title').should('be.visible').and('be.enabled');
        cy.get('#forms-first-name').should('be.visible').and('be.enabled');
        cy.get('#forms-last-name').should('be.visible').and('be.enabled');
        cy.get('#forms-dob').should('be.visible').and('be.enabled');
        cy.get('#forms-doj').should('be.visible').and('be.enabled');
        cy.get('#forms-email').should('be.visible').and('be.enabled');
        cy.get('#forms-phone-code').should('be.visible').and('be.enabled');
        cy.get('#forms-phone-number').should('be.visible').and('be.enabled');
        cy.get('#forms-comm-email').should('be.visible').and('not.be.checked');
        cy.get('#forms-comm-phone').should('be.visible').and('not.be.checked');
    });

    // TC_Basic_02: Verify submit a fully valid form
    it('Should fill the form correctly', () =>{
        cy.visit('https://www.qapractice.com/practice-forms');
        cy.get('#forms-country').select('Other');
        cy.get('#forms-title').select('Ms.');
        cy.get('#forms-first-name').type('Giss');
        cy.get('#forms-last-name').type('Luna');
        cy.get('#forms-dob').type('1996-09-24{enter}');
        cy.get('#forms-doj').type('24/09/2026');
        cy.get('#forms-email').type('gisslun@gmail.com');
        cy.get('#forms-phone-code').select('+Other');
        cy.get('#forms-phone-number').type('2344534551');
        cy.get('#forms-comm-phone').check();
        cy.get('#forms-title').should('have.value', 'Ms.');
        cy.get('#forms-dob').should('have.value', '1996-09-24');
        cy.get('#forms-submit').click();
        cy.contains('Details Successfully Added!').should('be.visible');
    });

    // TC_Basic_03: Verify radio buttons are mutually exclusive
    it('Should select phone communication option', () =>{
        cy.visit('https://www.qapractice.com/practice-forms');
        cy.get('#forms-comm-phone').should('not.be.checked');
        cy.get('#forms-comm-phone').check().should('be.checked');
        cy.get('#forms-comm-email').should('not.be.checked');
    });

    // TC_Basic_04: Verify submit an empty form
    it('Should show required validation messages', () =>{
        cy.visit('https://www.qapractice.com/practice-forms');
        cy.get('#forms-submit').click();
        cy.contains('Country of Residence is required').should('be.visible');
        cy.contains('Title is required').should('be.visible');
        cy.contains('First Name is required').should('be.visible');
        cy.contains('Last Name is required').should('be.visible');
        cy.contains('Date of Birth is required').should('be.visible');
        cy.contains('Date of Joining is required (dd/mm/yyyy)').should('be.visible');
        cy.contains('Email Address is required').should('be.visible');
        cy.contains('Phone Number is required').should('be.visible');
        cy.contains('Please select a Communication Preference').should('be.visible');
    });


    // TC_Basic_05: Verify Invalid email format
    it('Should show validation for invalid email format', () =>{
        cy.visit('https://www.qapractice.com/practice-forms');
        cy.get('#forms-country').select('Other');
        cy.get('#forms-title').select('Ms.');
        cy.get('#forms-first-name').type('Giss');
        cy.get('#forms-last-name').type('Luna');
        cy.get('#forms-dob').type('1996-09-24{enter}');
        cy.get('#forms-doj').type('24/09/2026');
        cy.get('#forms-email').type('gisslungmail.com');
        cy.get('#forms-phone-code').select('+Other');
        cy.get('#forms-phone-number').type('2344534551');
        cy.get('#forms-comm-phone').check();
        cy.on('window:alert', (message) => {
            expect(message).to.equal("Incluye un signo '@' en la direccion de correo electronico. La direccion 'gisslungmail.com' no incluye el signo'@'");
        }); 
        cy.get('#forms-submit').click();
    });

    //TC_Basic_06: Verify Date of joining wrong format
    it('Should show error for invalid date format', () =>{
        cy.visit('https://www.qapractice.com/practice-forms');
        cy.get('#forms-country').select('Other');
        cy.get('#forms-title').select('Ms.');
        cy.get('#forms-first-name').type('Giss');
        cy.get('#forms-last-name').type('Luna');
        cy.get('#forms-dob').type('1996-09-24{enter}');
        cy.get('#forms-doj').type('24-09-2026');
        cy.get('#forms-email').type('gisslun@gmail.com');
        cy.get('#forms-phone-code').select('+Other');
        cy.get('#forms-phone-number').type('2344534551');
        cy.get('#forms-comm-phone').check();
        cy.get('#forms-submit').click();
        cy.contains('Date of Joining format should be dd/mm/yyyy').should('be.visible');
    });


    // TC_Basic_07: Verify clear resets the form
    it('Should clear form fields', () =>{
        cy.visit('https://www.qapractice.com/practice-forms');
        cy.get('#forms-country').select('Other');
        cy.get('#forms-title').select('Ms.');
        cy.get('#forms-first-name').type('Giss');
        cy.get('#forms-last-name').type('Luna');
        cy.get('#forms-dob').type('1996-09-24{enter}');
        cy.get('#forms-doj').type('24/09/2026');
        cy.get('#forms-email').type('gisslun@gmail.com');
        cy.get('#forms-phone-code').select('+Other');
        cy.get('#forms-phone-number').type('2344534551');
        cy.get('#forms-comm-phone').check();
        cy.get('#forms-clear').click();
        cy.get('#forms-first-name').should('have.value', '');
        cy.get('#forms-last-name').should('have.value', '');
        cy.get('#forms-email').should('have.value', '');
        cy.get('#forms-phone-number').should('have.value', '');
        cy.get('#forms-comm-phone').should('not.be.checked');
    });

    
})