// Seth Guimont
// ingress-api-staging-test
// This program using selenium along with gecko driver to validate that 
// All the API's that delta comms host are visible through ingress
// Please note this Test Run is for the QA environment and the staging environment will need a different set of tests.


const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

    

  (async function(){

        // Apply timeout for 10 seconds
            await driver.manage().setTimeouts( { implicit: 10000 } );
                    
        // Navigate to url
            await driver.get('https://comms-device-registry.staging.platform.connectedfleet.io');
            // Testing if page loads
                await driver.getTitle().then(function(title){
                    console.log(title == "Swagger UI" ? "Verification Successful - Web page for comms-device-registry is displayed.":
                        "Verification Failed - comms-device-registry failed to load.");
                        });

        // Navigate to url
            await driver.get('https://comms-device-registry-old.staging.platform.connectedfleet.io');
            // Testing if page loads
                await driver.getTitle().then(function(title){
                    console.log(title == "Swagger UI" ? "Verification Successful - Web page for comms-device-registry-old is displayed.":
                        "Verification Failed - comms-device-registry-old failed  to load.");
                        });

        // Navigate to url
            await driver.get('https://comms-device-provisioning-service.staging.platform.connectedfleet.io');
            // Testing if page loads
                await driver.getTitle().then(function(title){
                    console.log(title == "Swagger UI" ? "Verification Successful - Web page for comms-device-provisioning-service is displayed.":
                        "Verification Failed - comms-provisioning-service failed to load.");
                        });

        // Navigate to url
            await driver.get('https://delta-comms-transmit-service.staging.platform.connectedfleet.io/#!/device-command-controller');
            // Testing if page loads
            await driver.getTitle().then(function (title) {
                console.log(title == "Swagger UI" ? "Verification Successful - Web page for delta-comms-transmit-service is displayed." :
                    "Verification Failed - delta-comms-transmit-service web page failed to load.");
            });

        // Navigate to url
            await driver.get('https://device-import-service.staging.platform.connectedfleet.io/');
            // Testing if page loads
            await driver.getTitle().then(function (title) {
                console.log(title == "Swagger UI" ? "Verification Successful - Web page for device-import-service is displayed." :
                    "Verification Failed - device-import-service web page failed to load.");
            });

            //driver.sleep(190000).then (function() {
                await driver.close();
            console.log("All tests complete, please view console for results")


                    
            }());    