@home
Feature: Home Page Checks
    As a site user, I want to use the home page feature so that
    I can use it confidently

  Background: Opening the site
     Given user navigates to the site
  @home1
  Scenario: Check the product button functionality
     When I click on the "product" button
     Then I should be seeing the review label
  @wip
   Scenario: Check the Buy button functionality
        When I click on the "buy" button
        Then I should be seeing the "Mom's_Old-Fashioned_Robot_Oil" page
