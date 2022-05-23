Feature: Login email domain is 254 characters

@user1 @web
Scenario: Ingreso a la aplicación con email de 254 caracteres en dominio
    #Login
    Given I navigate to page "<url>"
    And  I wait for 1 seconds
    When I enter username "<emailDominio254>"
    And I enter password "<password>"
    And I click on sign in
    And I wait for 1 seconds
    Then I validate username does not exist