Feature: Register functionality with a valid email address
  As a user, I want to register with a valid email address

#Background : I am on the home page and navigate to the sign in page

 Scenario: I should be able to register with a valid email address
   Given I am on the Sign in page
  When I fill in valid Email address and click on create an account
  And I fill in personal information on create Account page and click on Register
  Then I should see My Account page
  
