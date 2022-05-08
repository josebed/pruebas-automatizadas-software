Feature: Publish post

@user2 @web
Scenario: Create and publish post
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
    And I enter text "$name_3"
    And I wait for 1 seconds
    And I click on editor
    And I wait for 1 seconds
    And I enter text "$string"
    And I wait for 1 seconds

    #Publish post
    Then I click on publish
    And I wait for 1 seconds
    And I click on set it live now
    And I wait for 1 seconds
    And I click on publish button
    And I wait for 1 seconds
    And I click on confirm publish
    And I wait for 5 seconds
    And I should see post published
    And I wait for 3 seconds