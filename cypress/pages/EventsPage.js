class EventPage {

    //Selectors
    get eventsButton(){
        return cy.get('#nav-events');
    }
    get searchInput(){
        return cy.get('input[placeholder*="Search events"]');
    }
    get eventResult(){
        return cy.get('[data-testid="event-card"]');
    }
    get eventTitle(){
        return cy.contains('h3', 'Hollywood Monsoon Night — Los Angeles');
    }
    get eventDate(){
        return cy.get('.line-clamp-1');
    }

    //Actions
    browseEvents(){
        this.eventsButton.click();
    }
    pressEnter() {
        this.searchInput.type('{enter}');
    }
    selectEvent(eventName){
        this.searchInput.type(eventName);
        this.pressEnter();
    }
   
    
}

export default EventPage;