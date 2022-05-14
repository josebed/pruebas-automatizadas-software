Feature: Modify page

@user1 @web
Scenario: Ingreso a la aplicación y creo una página y la modifico
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario9/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario9/dashboard.png"

    #Create page
    When I click on pages
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario9/pages_list.png"
    And I click on new page
    And I take one screenshot "./artifacts/v1/scenario9/new_page.png"
    And I click on write title
    And I enter text "$name_2"
    And I wait for 1 seconds
    And I click on editor
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 1 seconds

    #Preview page
    Then I click on preview
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario9/preview_page.png"
    And I click on back
    And I wait for 1 seconds
    And I click on pages
    And I wait for 1 seconds
    And I should see page "$$name_2"
    And I wait for 1 seconds

    #Modify page
    And I click on latest page
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario9/view_page.png"
    And I click on settings
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario9/page_settings.png"
    And I click on custom-excerp
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 1 seconds
    And I click on feature post
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario9/page_settings_modification.png"
    And I click on settings
    And I wait for 1 seconds