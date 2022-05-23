Feature: Login empty password

@user1 @web
Scenario: Ingreso a la aplicación con correo sin contraseña
    #Login
    Given I navigate to page "<url>"
    And  I wait for 1 seconds
    When I enter username "<username>"
    And I wait for 1 seconds
    And I click on sign in
    And I wait for 1 seconds
    Then I validate fill the form message