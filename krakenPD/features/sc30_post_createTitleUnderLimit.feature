Feature: Create post with title length 254

@user1 @web
Scenario: Ingreso a la aplicación y creo un post con longitud de título 254
    #Login
    Given I navigate to page "<url>"
    And  I wait for 1 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 1 seconds

    #Create post
    When I click on create post
    And I wait for 1 seconds
    And I click on write title
    And I enter text "<postTitle254>"
    And I wait for 1 seconds
    And I click on editor
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 1 seconds

    #Preview post
    Then I click on preview
    And I wait for 1 seconds

    #List posts
    And I click on back
    And I wait for 1 seconds
    And I click on posts
    And I wait for 1 seconds
    And I should see post "<postTitle254>"
    And I wait for 3 seconds