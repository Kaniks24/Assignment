Feature: Search SecurePay on google and visit SecurePay website
  I want to verify the search results retrieval for Securepay on google and visit the SecurePay website.
  
  Scenario: SecurePay should be retrieved in the search results on google and click and navigate to SecurePay website
    Given I am on google serach engine page
    When I enter SecurePay in the search bar
    Then I should see SecurePay searches in the result
    And I click on SecurePay link from the search results
    Then I should navigate to SecurePay website
