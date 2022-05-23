Feature: Login wrong password

@user1 @web
Scenario: Ingreso a la aplicación con contraseña incorrecta
    #Login
    Given I navigate to page "<url>"
    And  I wait for 1 seconds
    When I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "$string_1"
    And I click on sign in
    And I wait for 1 seconds
    Then I validate wrong password