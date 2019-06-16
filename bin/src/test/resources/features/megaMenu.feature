Feature: Verify working of MegaMenu
  I want to verify the working of MegaMenu (Dresses -> Summer dresses)

#Background : I am on the home page

  Scenario: Working of MegaMenu 
    Given I am on the Sign in page
    When I hover on Dresses on MegaMenu
    And I click on Summer Dresses on sub menu
    Then I should see Summer Dresses page



