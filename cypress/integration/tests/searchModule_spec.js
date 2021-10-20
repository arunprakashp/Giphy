const {
    verifySearchFieldAndFindButtonVisibility,
    typeInSearchField,
    verifyAutoSuggestion,
    verifyNoDropdownForInvalidSearch,
    verifySearchByEnterKey,
    verifyInvalidSearchResults,
    verifySearchResults
} = require('../steps/searchModule_steps');

describe('Search Funtion tests on GIPHY', () => {
    const baseUrl = 'https://giphy.com/';
    const searchPositive = 'Happy';
    const searchNegative = 'efefef';
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('displays the search field and auto-suggestion on the page', () => {
        verifySearchFieldAndFindButtonVisibility();
        typeInSearchField(searchPositive);
        verifyAutoSuggestion();
    });

    it('Search for invalid query', () => {
        typeInSearchField(searchNegative);
        verifyNoDropdownForInvalidSearch();
        verifySearchByEnterKey();
        verifyInvalidSearchResults(searchNegative);
    });

    it('Search and choose from the auto-suggestion', () => {
        typeInSearchField(searchPositive);
        verifyAutoSuggestion();
        verifySearchResults();
    });
});