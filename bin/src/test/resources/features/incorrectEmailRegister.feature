Feature:  Register functionality with incorrect Email address
  I want to verify the error messgae displayed when incorrect e mail address is enetered while registering
  
  #Background : I am on the home page
   
 Scenario:  Error messgae should be displayed when incorrect e mail address is enetered while registering
  Given I am on the Sign in page
  When I enter incorrect email address and clicks on create an account
  Then I should see an error message
  
