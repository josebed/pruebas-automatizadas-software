Feature: Create page

@user1 @web
Scenario: Ingreso a la aplicación y creo una página y la borro
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario6/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario6/dashboard.png"

    #Create page
    When I click on pages
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario6/pages_list.png"
    And I click on new page
    And I take one screenshot "./artifacts/v1/scenario6/new_page.png"
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
    And I take one screenshot "./artifacts/v1/scenario6/page_settings.png"
    And I click on delete
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario6/page_confirm_delete.png"
    And I click on confirm delete
    And I wait for 1 seconds