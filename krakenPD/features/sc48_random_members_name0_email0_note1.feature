Feature: adicionar miembro

  @user1 @web
  Scenario: Ingreso a la aplicación y adicion un miembro
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 2 seconds


    #acce to member
    When I click on icon members
    And I wait for 1 seconds
    And I click on new member
    And I wait for 1 seconds
    And I click on git name new member
    And I wait for 1 seconds
    And I click on note new member "$name_1"
    And I wait for 1 seconds

    # Create new menber
    Then I click on save new member
    And I wait for 3 seconds
    And I click on icon members
    And I wait for 1 seconds





