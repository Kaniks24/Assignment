 Feature: Navigate to contact us page and verify the page is loaded
  I want to navigate to contact us page on SecurePay website and verify that contact us page is loaded

  Background: 
  Given I am on SecurePay Website
   
  Scenario: Navigate and verify the contact us page
  When I click on Contact Us link
  Then Contact us page should be loaded
  
  Scenario: Verify that the contact us form is filled with random data
  When I click on Contact Us link
  And I fill in the contact us form with the random generated data
  Then I should see the generated data 
