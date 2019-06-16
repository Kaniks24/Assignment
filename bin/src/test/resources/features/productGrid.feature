Feature: Validation of product grid arrangement based on Sort By price.
  I want to verify the arrangement of product grid after clicking on Sort By: Price on the Summer Dresses page

  Scenario: Arrangement of product grid on Summer Dresses page 
    Given I am on Summer Dresses page
    When I click on Sort By Price
    Then I should see the product grid is arranged properly 



