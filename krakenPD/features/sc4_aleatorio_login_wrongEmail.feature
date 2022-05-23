Feature: Login wrong email format

@user1 @web
Scenario: Ingreso a la aplicación con email con formato erróneo
    #Login
    Given I navigate to page "<url>"
    And  I wait for 1 seconds
    When I enter username "$name_1"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 1 seconds
    Then I validate fill the form message