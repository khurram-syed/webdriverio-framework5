@review
Feature: Reviews Checks
    As a site user, I want to use the home page feature so that
    I can use it confidently

  Background: Opening the site
     Given user navigates to the site
  @wip1
  Scenario Outline: Check the Email Address
     When I click on the "product" button
     And I set the email value "test.com"
     And I set the following login credentials
     | loginName | loginPassword |
     | Mark      | pass1234      |
     And I click on review text box with <user> and <password>
     Then I should see error message "Please enter a valid email address." for email
     Examples:
      |user|password|
      |user@phptravels.com|demouser|

   Scenario: Check the Empty Review Text Error
      When I click on the "product" button
      And I set the email value "test@test.com"
      And I click on review text box
      Then I should see error message "Please enter a valid email address." for review
