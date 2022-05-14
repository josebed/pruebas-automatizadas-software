Feature: Publish page

@user2 @web
Scenario: Ingreso a la aplicación y creo una página y la publico
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario4/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario4/dashboard.png"

    #Create page
    When I click on pages
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario4/pages_list.png"
    And I click on new page
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario4/new_page.png"
    And I click on write title
    And I enter text "$name_3"
    And I wait for 1 seconds
    And I click on editor
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 1 seconds

    #Publish page
    Then I click on publish
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario4/page_publish_menu.png"
    And I click on set it live now
    And I wait for 1 seconds
    And I click on publish button
    And I wait for 5 seconds
    And I should see page published
    And I wait for 1 seconds