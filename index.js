// Seth Guimont
// All API Tests
// This program using selenium along with gecko driver to validate that 
// All the API's that delta comms host are visible through ingress


const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

    
    // comms-device-registry
    driver.get('https://comms-device-registry.qa.platform.connectedfleet.io');

    driver.sleep(15000).then (function() {
        driver.getTitle().then(function(title) {

            let expectedTitle = "Swagger UI"

            if(expectedTitle === title){
                console.log("Verification Successful - The correct title is displayed on the web page.");
            }
            else{
                console.log("Verification Failed - An incorrect title is displayed on the web page.");
            }
        });
    });
    
   
    // comms-device-registry-old
    driver.sleep(30000).then (function() {
        driver.get('https://comms-device-registry-old.qa.platform.connectedfleet.io');
    });

    driver.sleep(45000).then (function() {
        driver.getTitle().then(function(title) {

            let expectedTitle = "Swagger UI"

            if(expectedTitle === title){
                console.log("Verification Successful - The correct title is displayed on the web page.");
            }
            else{
                console.log("Verification Failed - An incorrect title is displayed on the web page.");
            }
        });
    });

    

    // comms-provisioning-service
    driver.sleep(60000).then (function() {
        driver.get('https://comms-device-provisioning-service.qa.platform.connectedfleet.io/');
    });

    driver.sleep(75000).then (function() {
        driver.getTitle().then(function(title) {

            let expectedTitle = "Swagger UI"

            if(expectedTitle === title){
                console.log("Verification Successful - The correct title is displayed on the web page.");
            }
            else{
                console.log("Verification Failed - An incorrect title is displayed on the web page.");
            }
        });
    });

    //comms-provisioning-service-old
    driver.sleep(90000).then (function() {
        driver.get('https://comms-device-provisioning-service-old.qa.platform.connectedfleet.io/');
    });

    driver.sleep(110000).then (function() {
        driver.getTitle().then(function(title) {

            let expectedTitle = "Swagger UI"

            if(expectedTitle === title){
                console.log("Verification Successful - The correct title is displayed on the web page.");
            }
            else{
                console.log("Verification Failed - An incorrect title is displayed on the web page.");
            }
        });
    });

    //delta-comms-transmit-service
    driver.sleep(125000).then (function() {
        driver.get('https://delta-comms-transmit-service.qa.platform.connectedfleet.io/#!/device-command-controller');
    });

    driver.sleep(140000).then (function() {
        driver.getTitle().then(function(title) {

            let expectedTitle = "Swagger UI"

            if(expectedTitle === title){
                console.log("Verification Successful - The correct title is displayed on the web page.");
            }
            else{
                console.log("Verification Failed - An incorrect title is displayed on the web page.");
            }
        });
    });

    //device-import-service
    driver.sleep(155000).then (function() {
        driver.get('https://device-import-service.qa.platform.connectedfleet.io/');
    });

    driver.sleep(170000).then (function() {
        driver.getTitle().then(function(title) {

            let expectedTitle = "Swagger UI"

            if(expectedTitle === title){
                console.log("Verification Successful - The correct title is displayed on the web page.");
            }
            else{
                console.log("Verification Failed - An incorrect title is displayed on the web page.");
            }
        });
    });