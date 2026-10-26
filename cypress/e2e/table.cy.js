describe('Tabel', () =>{

    // TC_01: Verify display table
    it('Should display the table correctly', () =>{
        cy.visit('https://qaplayground.com/practice/data-table');
        cy.get('[data-testid="data-table-wrapper"]').should('be.visible');
        cy.get('[data-testid="table-head"]').should('be.visible');
        cy.get('[data-testid="book-row"]').should('have.length.at.least', 1);
    });

    // TC_02: Verify table headers
    it('Should display the correct table headers', () =>{
        cy.visit('https://qaplayground.com/practice/data-table');
    
        const headers = ['Sr No.', 'Book Name⇅', 'Book Genre⇅', 'Book Author⇅', 'Book ISBN⇅', 'Book Published⇅', 'Actions'];

        for (let i = 0; i < headers.length; i++) {
            cy.get('[data-testid="table-head"] th').eq(i).should('contain', headers[i]);
        }
    });

    // TC_03: Verify specific book information 
    it('Should display the correct book information', () =>{
        cy.visit('https://qaplayground.com/practice/data-table');
        cy.get('[data-testid="table-search"]').type('Atomic Habits');
        cy.contains('tr', 'Atomic Habits').as('bookRow');
        cy.get('@bookRow').should('contain', 'Atomic Habits').and('contain', 'Non-Fiction').and('contain', 'James Clear').and('contain', 'ISBN-9780735211292');
    });

    // TC_04: Verify search result count
    it('Should display the correct number of search results', () =>{
        cy.visit('https://qaplayground.com/practice/data-table');
        cy.get('[data-testid="table-search"]').type('the');
        cy.get('[data-testid="row-count"]').should('contain', '11');
    });

    // TC_05: Verify pagination with search result count
    it('Should paginate search results correctly', () =>{
        cy.visit('https://qaplayground.com/practice/data-table');
        cy.get('[data-testid="table-search"]').type('the');
        cy.get('[data-testid="book-row"]').should('have.length', 5);
        cy.get('[data-testid="pagination-page-2"]').click();
        cy.get('[data-testid="book-row"]').should('have.length', 5);
        cy.get('[data-testid="pagination-next"]').click();
        cy.get('[data-testid="book-row"]').should('have.length', 1);
        cy.get('[data-testid="row-count"]').should('contain', '11');

    });

    // TC_06: Verifiy sort books by name
    it('Should sort books by name correctly', () =>{
        cy.visit('https://qaplayground.com/practice/data-table');
        cy.get('[data-testid="book-row"]').should('have.length.at.least', 1).and('contain', 'The Pragmatic Programmer');
        cy.get('[data-testid="col-book-name"]').click();
        cy.get('[data-testid="book-row"]').first().should('contain', '1984');
    });

    
})