@api @testAPI
Feature: 100-APIFeature
  As a tester, I want to check different API requests so that I can use them confidently

  Background:
    Given user has set the api request for "POSTS" api

  @api1
  Scenario: 1001- Check GET request for jsonplaceholder posts api to create new resource
     When user runs the "GET" request for following posts values
        | FieldName | FieldValue       |
        | id        | 1                |
     Then user should receive "200" response with "following" response body
        | FieldName | FieldValue        |
        | userId    | 1                 |
        | id        | 1                 |
        | title     | sunt aut facere.. |    
        | body      | quia et suscipi..|
  @api2
  Scenario: 1002- Check POST request for jsonplaceholder posts api to create new resource
     When user runs the "POST" request for following posts values
        | FieldName  | FieldValue        |
        | userId     | 1                 |
        | title      | WDIO Title        |
        | body       | WDIO body        |
     Then user should receive "201" response with "following" response body
        | FieldName | FieldValue        |
        | id        | 101               |
  @api3
  Scenario: 1003- Check PATCH request for jsonplaceholder posts api to update existing resource
     When user runs the "PUT" request for following posts values
        | FieldName  | FieldValue        |
        | id         | 2               |  
        | userId     | 1                 |
        | title      | WDIO Title        |
        | body       | WDIO body        |
     Then user should receive "200" response with "following" response body
        | FieldName | FieldValue        |
        | id        | 2               |      
  @api4
  Scenario: 1004- Check DELETE request for jsonplaceholder posts api to delete existing resource
     When user runs the "DELETE" request for following posts values
        | FieldName  | FieldValue        |
        | id         | 2               |  
     Then user should receive "200" response with "NO" response body
        | FieldName | FieldValue        |
        | id        | 2               |      
     

