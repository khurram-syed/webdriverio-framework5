@review
Feature: 3-Reviews Checks
    As a site user, I want to use the home page feature so that
    I can use it confidently

  Background: Opening the site
     Given user navigates to the site
  @wip1 @review1
  Scenario Outline: 31-Check the Email Address
     When user clicks on the "product" button
     And user sets the "email" value "test.com"
     And user sets the following login credentials
         | loginName | loginPassword |
         | Mark      | pass1234      |
     And user clicks on review text box with <user> and <password>
     Then user should see error message "Please enter a valid email address." for email
       Examples:
         |user                | password | 
         |user@phptravels.com | demouser |
   @review2
   Scenario: 32- Check the Empty Review Text Error
      When user clicks on the "product" button
      And user sets the "email" value "test@test.com"
      And user clicks on review text box
      Then user should see error message "Please enter a valid email address." for review
