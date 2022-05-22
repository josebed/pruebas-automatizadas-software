Feature: Login empty email

@user1 @web
Scenario: Ingreso a la aplicación sin correo
    #Login
    Given I navigate to page "<url>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 1 seconds
    Then I validate fill the form message