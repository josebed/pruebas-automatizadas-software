Feature: Login username is 65 characters

@user1 @web
Scenario: Ingreso a la aplicación con username de 65 caracteres
    #Login
    Given I navigate to page "<url>"
    And  I wait for 1 seconds
    When I enter username "<email-65>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 1 seconds
    Then I validate fill the form message