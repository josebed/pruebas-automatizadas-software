Feature: Create Tag title with 192 characters

@user1 @web
Scenario: Ingreso a la aplicación y creo un tag con 501 caracteres de descripcion
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
    And I enter text "$name_3"
    And I wait for 1 seconds
    And I click on tag description
    And I wait for 1 seconds
    And I enter text "<tagDescription501>"
    And I wait for 1 seconds
    And I click on save

    Then I validate overlimit description error