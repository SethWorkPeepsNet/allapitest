// Seth Guimont
// All API Tests
// This program using selenium along with gecko driver to validate that 
// All the API's that delta comms host are visible through ingress
// Please note this Test Run is for the QA environment and the staging environment will need a different set of tests.


const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

    

    // will improve syntax to 
    /*driver.getTitle()
		.then((title) => console.log(title == "Swagger UI" ?
				"Verification Successful - Web page for delta-comms-transmit-service is displayed."
				: "Verification Failed - delta-comms-transmit-service web page failed to load."));*/

   
    
    

                

                  
    // comms-device-registry
  
    
    driver.get('https://comms-device-registry.qa.platform.connectedfleet.io');
    driver.sleep(15000).then (function() {
        driver.getTitle().then(function(title) {

            let expectedTitle = "Swagger UI"

            if(expectedTitle === title){
                console.log("Verification Successful - Web page for comms-device-registry is displayed.");
            }
            else{
                console.log("Verification Failed - comms-device-registry failed to load.");
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
                console.log("Verification Successful - Web page for comms-device-registry-old is displayed.");
            }
            else{
                console.log("Verification Failed - comms-device-registry-old web pagefailed to load.");
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
                console.log("Verification Successful - Web page for comms-device-provisioning-service is displayed.");
            }
            else{
                console.log("Verification Failed - comms-device-provisioning-service web page failed to load.");
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
                console.log("Verification Successful - Web page for comms-device-provisioning-service-old is displayed.");
            }
            else{
                console.log("Verification Failed - comms-device-provisioning-service-old web page failed to load.");
            }
        });
    });

    // delta-comms-transmit-service
    driver.sleep(125000).then (function() {
        driver.get('https://delta-comms-transmit-service.qa.platform.connectedfleet.io/#!/device-command-controller');
    });

    driver.sleep(140000).then (function() {
        driver.getTitle().then(function(title) {

            let expectedTitle = "Swagger UI"

            if(expectedTitle === title){
                console.log("Verification Successful - Web page for delta-comms-transmit-service is displayed.");
            }
            else{
                console.log("Verification Failed - delta-comms-transmit-service web page failed to load.");
            }
        });
    });

    // device-import-service
    driver.sleep(155000).then (function() {
        driver.get('https://device-import-service.qa.platform.connectedfleet.io/');
    });

    driver.sleep(170000).then (function() {
        driver.getTitle().then(function(title) {

            let expectedTitle = "Swagger UI"

            if(expectedTitle === title){
                console.log("Verification Successful - Web page for device-import-service is displayed.");
            }
            else{
                console.log("Verification Failed - device-import-service web page failed to load.");
            }
        });
    });


    //optional test, manual check for now will implement automated version in the future

    /*driver.sleep(180000).then (function() {
        driver.get('https://comms-kafka-connect.qa.platform.connectedfleet.io/');
    });*/

    

    driver.sleep(190000).then (function() {
        driver.close();
        console.log("All tests complete, please view console for results")
    });    

    // below code is not working
    /*driver.get('https://comms-device-registry.qa.platform.connectedfleet.io');

    driver.sleep(15000).then (function() {
        driver.getCurrentUrl().then(function(URL) {

            let expectedUrl = "https://comms-device-registry.qa.platform.connectedfleet.io"

            if(expectedUrl === URL){
                console.log("Verification Successful - Web page for comms-device-registry is displayed.");
            }
            else{
                console.log("Verification Failed - comms-device-registry failed to load.");
            }
        });
    });*/