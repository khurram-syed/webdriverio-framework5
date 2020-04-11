@home
Feature: 1-Home Page Checks
    As a site user, I want to use the home page feature so that
    I can use it confidently

  Background: Opening the site
     Given user navigates to the site
  @home1
  Scenario: 11- Check the product button functionality
     When user clicks on the "product" button
     Then user should be seeing the review label
  @wip
   Scenario: 12- Check the Buy button functionality
        When user clicks on the "buy" button
        Then user should be seeing the "Mom's_Old-Fashioned_Robot_Oil" page
