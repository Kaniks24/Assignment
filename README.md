# Assignment
## Created a Maven project. 

* BDD: Cucumber 
* Web Automation: Selenium 
* Programming language: Java 
* Covered scenarios as asked.
* Cross Browser testing in Firefox and Chrome.
* Generated the reports in the target folder.

## Framework link:

`https://github.com/Kaniks24/Assignment`

## Framework Structure:

* src/test/resources/features - All the Cucumber feature files are included here.
* src/test/java/userStepDefinitions/StepDefinition - Defined step definition under this package for the feature files.
* src/test/java/env - This package contains Cucumber runner (RunnerTest.java) where glue code location is configured .
* src/test/java/userStepDefinitions/Hooks - Before and After test settings are configured for initialising driver instances for respective   driver. To run the code using Chrome Driver specifically for Windows, Chrome driver exec file system path, needs to be set in Hooks     file, as the code is developed on MAC OS.
* Cucumber HTML reports and son and surefire reports are produced in the target folder.

## Running Test:

* To run the Automation suite from the command line, go to the project directory from the Terminal and hit the below command:
   `mvn test`
* To pass the browser name dynamically as Maven parameter for Chrome browser:
   `mvn test -DbrowserName=chrome`


