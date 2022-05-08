Feature: Create page

@user1 @web
Scenario: Ingreso a la aplicación y creo una página y la borro
    #Login
    Given I navigate to page "<url>"
    And  I wait for 5 seconds
    And I enter username "<username>"
    And I wait for 2 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 2 seconds

    #Create page
    When I click on pages
    And I wait for 1 seconds
    And I click on new page
    And I click on write title
    And I enter text "$name_2"
    And I wait for 1 seconds
    And I click on editor
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 1 seconds

    #Delete page
    And I click on settings
    And I wait for 1 seconds
    And I click on delete
    And I wait for 1 seconds
    And I click on confirm delete
    And I wait for 3 seconds