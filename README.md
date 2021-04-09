# allapitest

This test run only tests that URL's that are hosted in ingress, and presented through Swagger UI are displayed properly 
in the QA environment, other automated tests will have to be written for staging if needed.

After all the proper node modules have been downloaded, you will also need the gecko driver for selenium javascript.

Tests will start when from the directory "node qa.js" is typed for testing the QA environment and "staging.js" is typed for testing staging environment.

"Index.js" currently does nothing