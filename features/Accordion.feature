Feature: Home Page FAQ 

  Background: 
    Given user navigates to the site
 
  @accordion1
  Scenario: Checking different accordions display on clicking
    When user clicks on "2nd" accordion
    Then user should see "2nd" accordion is open and other two are closed
    When user clicks on "3rd" accordion
    Then user should see "3rd" accordion is open and other two are closed


