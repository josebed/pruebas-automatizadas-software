Feature: Create Tag

@user1 @web
Scenario: Ingreso a la aplicación y creo un tag
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
    And I click on tag name
    And I enter text "$name_2"
    And I wait for 1 seconds
    And I click on tag description
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 1 seconds
    And I click on save

    #list Tags
    Then I click on tags
    And I wait for 1 seconds
    And I should see tag "$$name_2"
    And I wait for 3 seconds