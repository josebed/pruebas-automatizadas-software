Feature: Login successfull

@user1 @web
Scenario: Ingreso a la aplicación con datos exitosos
    #Login
    Given I navigate to page "<url>"
    And  I wait for 1 seconds
    When I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 1 seconds
    Then I validate login successful