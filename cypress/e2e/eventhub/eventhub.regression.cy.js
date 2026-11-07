import LoginPageEven from '../../pages/LoginPageEven';
import EventPage from '../../pages/EventsPage';
import BookPage from '../../pages/BookingPage';

describe('Mini Project', () =>{
    const LoginPage = new LoginPageEven();
    const eventPage = new EventPage();
    const bookPage = new BookPage();

    // Verify the info of an event
    it('TC-01 — Events', () =>{
        cy.fixture('eventHubData').then((data) =>{
            LoginPage.login(data.validUser.email, data.validUser.password);
            eventPage.browseEvents();
            eventPage.eventResult.should('be.visible');
            eventPage.selectEvent(data.booking.eventName);
            eventPage.eventTitle.should('be.visible');
            eventPage.eventDate.should('be.visible').and('contain.text', 'Sat, 11 Jul');
        });
    });

    // Verify Book an event successfully
    it('TC-02 — Booking', () =>{
        cy.fixture('eventHubData').then((data) =>{
            LoginPage.login(data.validUser.email, data.validUser.password);
            eventPage.browseEvents();
            eventPage.selectEvent(data.booking.eventName);
            bookPage.pressBookTickets();
            bookPage.bookEnter(data.booking.customerName, data.booking.customerEmail, data.booking.phone);
            bookPage.countTicketLabel.should('have.text', data.booking.ticketCount);
            bookPage.displayTotal.should('be.visible').and('have.text', data.booking.expectedTotal);
            bookPage.confirmMessage.should('be.visible');
        });
    });

    // Verify that exist a booked event
    // Precondition: The logged-in user must have an existing booking.
    it('TC-03 — My Bookings', () =>{
        cy.fixture('eventHubData').then((data) =>{
            LoginPage.login(data.validUser.email, data.validUser.password);
            bookPage.viewDetailsBooking();
            bookPage.myBookingLabel.should('be.visible');
            bookPage.displayTitleEvent.should('be.visible').and('contain', data.booking.eventName);
            bookPage.displayName.should('be.visible').and('have.text', data.booking.customerName);
            bookPage.displayTotal.should('be.visible').and('have.text', data.booking.expectedTotal);
        });
        
    });
    
});