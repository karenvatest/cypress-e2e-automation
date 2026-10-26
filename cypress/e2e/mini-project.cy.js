describe('Mini Project', () =>{
    // Verify the user registration successfully
    it('TC-01 — User Registration', () =>{
        const uniqueEmail = `test${Date.now()}@testing.com`;
        cy.visit('/login');
        cy.get('a[href="/register"]').click();
        cy.get('[data-testid="register-email"]').type(uniqueEmail);
        cy.get('[data-testid="register-password"]').type('Test.ing1');
        cy.get('input[type="password"]').eq(1).type('Test.ing1');
        cy.get('[data-testid="register-btn"]').click();
        cy.get('[data-testid="user-email-display"]').should('have.text', uniqueEmail);
    });

    // Verify login successfully
    it('TC-02 — Login', () =>{
        cy.visit('/login');
        cy.get('#email').type('test03@testing.com');
        cy.get('#password').type('Test01.ing');
        cy.get('#login-btn').click();
        cy.get('[data-testid="user-email-display"]').should('have.text', 'test03@testing.com');
    });

    // Verify the info of an event
    it('TC-03 — Events', () =>{
        cy.visit('/login');
        cy.get('#email').type('test03@testing.com');
        cy.get('#password').type('Test01.ing');
        cy.get('#login-btn').click();
        cy.get('[data-testid="event-card"]').should('be.visible');
        cy.contains('span', 'Browse Events').click();
        cy.get('input[placeholder*="Search events"]').type('Holly');
        cy.contains('[data-testid="event-card"]', 'Hollywood Monsoon Night').find('[data-testid="book-now-btn"]').click();
        cy.contains('h1', 'Hollywood Monsoon Night — Los Angeles').should('be.visible');
        cy.contains('p', 'Saturday, 11 July').should('be.visible');
        cy.contains('h2', 'Book Tickets').should('be.visible');
    });

    // Verify Book an event successfully
    it('TC-04 — Booking', () =>{
        cy.visit('/login');
        cy.get('#email').type('test03@testing.com');
        cy.get('#password').type('Test01.ing');
        cy.get('#login-btn').click();
        cy.contains('span', 'Browse Events').click();
        cy.get('input[placeholder*="Search events"]').type('Holly');
        cy.contains('[data-testid="event-card"]', 'Hollywood Monsoon Night').find('[data-testid="book-now-btn"]').click();
        cy.contains('h1', 'Hollywood Monsoon Night — Los Angeles').should('be.visible');
        cy.contains('button', /\+/).click();
        cy.get('#ticket-count').should('have.text', '2');
        cy.get('#customerName').type('Aura Ola');
        cy.get('#customer-email').type('test03@testing.com');
        cy.get('#phone').type('1234567890');
        cy.contains('span', '$5,000').should('be.visible');
        cy.get('button[type="submit"]').click();
        cy.contains('h3', 'Booking Confirmed! 🎉').should('be.visible');
    });

    // Verify that exist a booked event
    // Precondition: The logged-in user must have an existing booking.
    it('TC-05 — My Bookings', () =>{
        cy.visit('/login');
        cy.get('#email').type('test03@testing.com');
        cy.get('#password').type('Test01.ing');
        cy.get('#login-btn').click();
        cy.get('[data-testid="nav-bookings"]').click();
        cy.contains('h1', 'My Bookings').should('be.visible');
        cy.contains('h3', 'Hollywood Monsoon Night — Los Angeles').should('be.visible');
        cy.get('button.text-xs').contains('View Details').click();
        cy.contains('h3', 'Hollywood Monsoon Night — Los Angeles').should('be.visible');
        cy.contains('span', 'Aura Ola').should('be.visible');
        cy.contains('span', '$5,000').should('be.visible');
    });

    
    
});