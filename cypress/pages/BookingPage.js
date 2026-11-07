class BookPage{
    //Selectors
    get myBookingButton(){
        return cy.get('[data-testid="nav-bookings"]');
    }
    get myBookingLabel(){
        return cy.contains('h1', 'My Bookings');
    }
    get viewButton(){
        return cy.get('button.text-xs').contains('View Details');
    }
    get bookTicketsButton(){
        return cy.contains('h3', 'Hollywood Monsoon Night — Los Angeles')
                .parents('div') 
                .find('[data-testid="book-now-btn"]').eq(1);
       // return cy.get('[data-testid="book-now-btn"]');
    }
    get plusTicketButton(){
        return cy.contains('button', /\+/);
    }
    get countTicketLabel(){
        return cy.get('#ticket-count');
    }
    get nameInput(){
        return cy.get('#customerName');
    }
    get emailInput(){
        return cy.get('#customer-email');
    }
    get phoneNumberInput(){
        return cy.get('#phone');
    }
    get displayTitleEvent(){
        return cy.contains('h1', 'Hollywood Monsoon Night — Los Angeles');
    }
    get displayName(){
        return cy.contains('span', 'Aura Ola');
    }
    get displayTotal(){
        return cy.contains('span', '$5,000');
    }
    get confirmBookTicketsButton(){
        return cy.get('button[type="submit"]');
    }
    get confirmMessage(){
        return cy.contains('h3', 'Booking Confirmed! 🎉');
    }

    //Actions
    pressMyBookingButton(){
        this.myBookingButton.click();
    } 
    pressViewDetalisButton(){
        this.viewButton.click();
    }
    viewDetailsBooking(){
        this.pressMyBookingButton();
        this.pressViewDetalisButton();
    }
    pressBookTickets(){
        this.bookTicketsButton.click();
    }
    pressAddTickets(){
        this.plusTicketButton.click();
    }
    enterName(name){
        this.nameInput.type(name);
    }
    enterEmail(email){
        this.emailInput.type(email);
    }
    enterPhoneNumber(phone){
        this.phoneNumberInput.type(phone);
    }
    pressConfirmBooking(){
        this.confirmBookTicketsButton.click();
    }
    bookEnter(name, email, phone){
        this.pressAddTickets();
        this.enterName(name);
        this.enterEmail(email);
        this.enterPhoneNumber(phone);
        this.pressConfirmBooking();
    }

}

export default BookPage;