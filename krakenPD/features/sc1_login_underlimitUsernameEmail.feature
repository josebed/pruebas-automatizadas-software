Feature: Login username is 63 characters

@user1 @web
Scenario: Ingreso a la aplicación con username de 63 caracteres
    #Login
    Given I navigate to page "<url>"
    And  I wait for 1 seconds
    When I enter username "<email-63>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 1 seconds
    Then I validate username does not exist