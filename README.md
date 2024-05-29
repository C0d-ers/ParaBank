Installation
Cypress Installation:
    Make sure Node.js is preinstalled.
    Install Cypress using npm:  npm install cypress --save-dev 
    
Install Dependencies:
    Check the package.json file for dependencies.
    Run npm install to ensure all packages are up to date: npm install
  
Running Tests
    Use the following npm scripts to run tests in different browsers:
        npm run cypress:run:chrome  # Run tests in Chrome
        npm run cypress:run:firefox # Run tests in Firefox
        npm run cypress:run:edge    # Run tests in Microsoft Edge

Test Reports
    Test reports will be generated in the report folder with the label index.html.
    Open index.html in a web browser to view the test report.
