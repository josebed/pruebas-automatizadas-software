Feature: Delete tag

@user1 @web
Scenario: Ingreso a la aplicación y creo un tag y lo elimino
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 1 seconds

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
    And I wait for 2 seconds

    #Delete Tag
    And I click on delete tag
    And I wait for 1 seconds
    And I click on confirm delete tag
    And I wait for 5 seconds