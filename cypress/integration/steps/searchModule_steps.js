
export const verifySearchFieldAndFindButtonVisibility = () => {
    cy.log('Check if the search field and the search button is available on the page');
    cy.get('#searchbar').should('exist');
    cy.get('.SearchButtonContainer-sc-65ycrl.cCAKsY').should('exist');
};

export const typeInSearchField = (searchText) => {
    cy.log('Type the text in the search field');
    cy.get('#searchbar').type(searchText);
};

export const verifyAutoSuggestion = () => {
    cy.get('.DropdownItem-sc-gmmzvz.gNCGqs').should('exist');
};

export const verifyNoDropdownForInvalidSearch = () => {
    cy.get('.DropdownItemInfo-sc-17vjmt3.zAPbo').should('not.exist');
};

export const verifySearchByEnterKey = () => {
    cy.get('#searchbar').type('{enter}');
};

export const verifyInvalidSearchResults = (searchText) => {
    cy.get('.Container-sc-ju2d4r.iUVSlU').find('.sc-bYwzba.Title-sc-jgn010.cYmwOA.kDbeTS').as('result');
    cy.get('@result').invoke('text').should('contain', searchText);
    cy.get('@result').find('span').invoke('attr', 'data-gif-count').should('eq', '0');
};

export const verifySearchResults = () => {
    cy.get('.DropdownItem-sc-gmmzvz.gNCGqs').find('.DropdownItemInfo-sc-17vjmt3.zAPbo').first().as('firstSuggestion');
    cy.get('@firstSuggestion').find('span').invoke('text').then((firstItem) => {
        const firstResult = firstItem;
        cy.get('@firstSuggestion').click();
        cy.get('.Container-sc-ju2d4r.iUVSlU').find('.sc-bYwzba.Title-sc-jgn010.cYmwOA.kDbeTS').invoke('text').should('contain', firstResult);
        cy.get('.Container-sc-ju2d4r.iUVSlU').find('.sc-bYwzba.Title-sc-jgn010.cYmwOA.kDbeTS').as('result');
        cy.get('@result').find('span').invoke('attr', 'data-gif-count').should('not.eq', '0');
    }); 
};