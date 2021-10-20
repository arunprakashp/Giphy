
export const verifyTrendingSection = () => {
    cy.log('Check if the Trending Section is displayed on the page');
    cy.get('.Container-sc-swtq0n.fXGnTM').first().find('.Title-sc-kvmtvl.fdATmE').should('have.text', 'Trending');
};

export const clickAndVerifyGifFromTrendingSection = (baseUrl) => {
    cy.log('Check if clicking a GIF from Trending Section is displaying clicked GIF');
    cy.get('.List-sc-1ix316o.ejcdUJ').find('.Item-sc-1yg4na3.bKPIpm').first().as('firstGIF');
    cy.get('@firstGIF').find('.giphy-gif-img.giphy-img-loaded').invoke('attr', 'src').then((firstIMG) => {
        let clickedGifID = firstIMG.substring(firstIMG.indexOf('media/')+6, firstIMG.indexOf('/200'));
        cy.get('@firstGIF').click();
        cy.location('href').should('not.eq', baseUrl);
        cy.get('.KRS9L9BsuEdhF-ACKiX8x').find('div').as('secondGIF');
        cy.get('@secondGIF').find('img').invoke('attr', 'src').should('contain', clickedGifID);
    });
};