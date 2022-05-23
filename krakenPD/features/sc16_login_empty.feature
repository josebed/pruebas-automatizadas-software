Feature: Login empty fields

@user1 @web
Scenario: Ingreso a la aplicación sin poner datos
    Given I navigate to page "<url>"
    And  I wait for 1 seconds
    When I click on sign in
    And I wait for 1 seconds
    Then I validate fill the form message