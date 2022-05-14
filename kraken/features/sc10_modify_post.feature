Feature: Create post

@user1 @web
Scenario: Ingreso a la aplicación y creo un post y lo modifico
    #Login
    Given I navigate to page "<url>"
    And  I wait for 1 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario10/login.png"
    And I click on sign in
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario10/dashboard.png"

    #Create post
    When I click on create post
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario10/new_post.png"
    And I click on write title
    And I enter text "$name_1"
    And I wait for 1 seconds
    And I click on editor
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 1 seconds

    #Preview post
    Then I click on preview
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario10/preview_post.png"

    #List posts
    And I click on back
    And I wait for 1 seconds
    And I click on posts
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario10/posts_list.png"
    And I should see post "$$name_1"
    And I wait for 3 seconds

    #Edit post
    And I click on latest post
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario10/view_post.png"
    And I click on settings
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario10/post_settings.png"
    And I click on custom-excerp
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 1 seconds
    And I click on feature post
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario10/post_settings_modification.png"
    And I click on settings
    And I wait for 1 seconds