const {
    verifyTrendingSection,
    clickAndVerifyGifFromTrendingSection
} = require('../steps/trendingSection_steps');

describe('Trending Section tests on GIPHY', () => {
    const baseUrl = 'https://giphy.com/';
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('displays the Trending section on the page', () => {
        verifyTrendingSection();
    });

    it('clicking a gif from the Trending section on the page', () => {
        clickAndVerifyGifFromTrendingSection(baseUrl);
    });
});