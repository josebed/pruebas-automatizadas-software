Feature: Create page

    @user1 @web
    Scenario: Ingreso a la aplicación y creo una página
    #Login
        Given I navigate to page "<url>"
        And  I wait for 2 seconds
        And I enter username "<username>"
        And I wait for 1 seconds
        And I enter password "<password>"
        And I click on sign in
        And I wait for 2 seconds


    #Create page
        When I click on pages
        And I wait for 1 seconds
        And I click on new page
        And I click on write title
        And I enter text "<name_mienbro3>"
        And I wait for 1 seconds
        And I click on editor
        And I wait for 1 seconds
        And I enter text "<name_mienbro4>"
        And I wait for 1 seconds
        And I click on write title
        And I enter text "<title_page_256>"

    #Preview page
        Then I click on preview
        And I wait for 1 seconds
        And I click on back
        And I wait for 1 seconds
        And I should see page error
        And I wait for 1 seconds