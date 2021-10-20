# Giphy Page Automation testing
Scenarios covered:
1. Visit the site and check if the Trending section exist
2. Make sure search works
	- search field exist & can type & search results are shown after a search
	- search with a existing known word and check if results are results and are related to it
	- search for say, efefef, and check if it displays 0 gifs result
3. Click on a gif in treding section 
	- check if it goes to the clicked gif page and displays it
	- handling src img scenario here
	- check if new url is not as old url and same image ids

# Steps to run the test case
1. Install Node.js, preferably v12+
2. git clone this Giphy repo 
3. Get in to the root folder in terminal and install Cypress using this command - 'npm install cypress'
4. Avoid any warning message while installationa but make sure there are no errors, which can be verified using version check command - 'npm cypress -v' - this will show the installed Cypress version.
5. To run the test cases, type 'npx cypress open' command which will open the Cypress GIU to display the list of test cases.
6. Click on the two tests written one each for Search Module and Trending Section Module and clicking on which will run both the tests cases in a new browser
