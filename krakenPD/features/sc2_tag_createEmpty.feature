Feature: Create Tag Empty

@user1 @web
Scenario: Ingreso a la aplicación y creo un tag sin datos
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 2 seconds

    #Create Tag
    When I click on tags
    And I wait for 1 seconds
    And I click on new tag
    And I wait for 1 seconds
    And I click on save
    Then I validate name error message