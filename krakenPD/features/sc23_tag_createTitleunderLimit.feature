Feature: Create Tag title with 190 characters

@user1 @web
Scenario: Ingreso a la aplicación y creo un tag con 190 caracteres de titulo
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
    And I click on tag name
    And I enter text "<tagName190>"
    And I wait for 1 seconds
    And I click on tag description
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 1 seconds
    And I click on save

    Then I should see tag "<tagName190>"
    And I wait for 1 seconds