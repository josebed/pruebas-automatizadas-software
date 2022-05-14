Feature: Create post

@user1 @web
Scenario: Ingreso a la aplicación y creo y borro un post
    #Login
    Given I navigate to page "<url>"
    And I wait for 1 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario7/login.png"
    And I click on sign in
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario7/dashboard.png"

    #Create post
    When I click on create post
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario7/new_post.png"
    And I click on write title
    And I enter text "$name_1"
    And I wait for 1 seconds
    And I click on editor
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 2 seconds

    #Delete post
    And I click on settings
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario7/post_settings.png"
    And I click on delete
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario7/post_delete_confirm.png"
    And I click on confirm delete
    And I wait for 1 seconds