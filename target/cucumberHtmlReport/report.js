$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchAndClickSecurePay.feature");
formatter.feature({
  "name": "Search SecurePay on google and visit SecurePay website",
  "description": "  I want to verify the search results retrieval for Securepay on google and visit the SecurePay website.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "SecurePay should be retrieved in the search results on google and click and navigate to SecurePay website",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on google serach engine page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchAndClickStepDefinition.iAmOnGoogleSerachEnginePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter SecurePay in the search bar",
  "keyword": "When "
});
formatter.match({
  "location": "SearchAndClickStepDefinition.iEnterSecurePayInTheSearchBar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see SecurePay searches in the result",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchAndClickStepDefinition.iShouldSeeSecurePaySearchesInTheResult()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on SecurePay link from the search results",
  "keyword": "And "
});
formatter.match({
  "location": "SearchAndClickStepDefinition.iClickOnSecurePayLinkFromTheSearchResults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should navigate to SecurePay website",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchAndClickStepDefinition.iShouldNavigateToSecurePayWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/testContactUs.feature");
formatter.feature({
  "name": "Navigate to contact us page and verify the page is loaded",
  "description": "  I want to navigate to contact us page on SecurePay website and verify that contact us page is loaded",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on SecurePay Website",
  "keyword": "Given "
});
formatter.match({
  "location": "TestContactUsStepDefinition.iAmOnSecurePayWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Navigate and verify the contact us page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Contact Us link",
  "keyword": "When "
});
formatter.match({
  "location": "TestContactUsStepDefinition.iClickOnContactUsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Contact us page should be loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "TestContactUsStepDefinition.contactUsPageShouldBeLoaded()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on SecurePay Website",
  "keyword": "Given "
});
formatter.match({
  "location": "TestContactUsStepDefinition.iAmOnSecurePayWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that the contact us form is filled with random data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Contact Us link",
  "keyword": "When "
});
formatter.match({
  "location": "TestContactUsStepDefinition.iClickOnContactUsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill in the contact us form with the random generated data",
  "keyword": "And "
});
formatter.match({
  "location": "TestContactUsStepDefinition.iFillInTheContactUsFormWithTheRandomGeneratedData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the generated data",
  "keyword": "Then "
});
formatter.match({
  "location": "TestContactUsStepDefinition.iShouldSeeTheGeneratedData()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});