Feature: Publish post v2

@user2 @web
Scenario: Create and publish post
    #Login
    Given I navigate to page "<url2>"
    And  I wait for 1 seconds
    And I enter username "<username2>"
    And I wait for 1 seconds
    And I enter password "<password2>"
    And I take one screenshot "./artifacts/v2/scenario3/login.png"
    And I click on sign in
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v2/scenario3/dashboard.png"

    #Create post
    When I click on create post
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v2/scenario3/new_post.png"
    And I click on write title
    And I enter text "$name_3"
    And I wait for 1 seconds
    And I click on editor
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 1 seconds

    #Publish post
    Then I click on publish
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v2/scenario3/post_publish_menu.png"
    And I click on set it live now
    And I wait for 1 seconds
    And I click on publish button
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v2/scenario3/post_publish_confirm.png"
    And I wait for 5 seconds
    And I should see status published
    And I wait for 1 seconds