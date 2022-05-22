Feature: Login User email does not exist

@user1 @web
Scenario: Ingreso a la aplicación con email no existente
    #Login
    Given I navigate to page "<url>"
    And  I wait for 1 seconds
    When I enter username "$email_1"
    And I wait for 1 seconds
    And I enter password "$string_1"
    And I click on sign in
    And I wait for 1 seconds
    Then I validate username does not exist