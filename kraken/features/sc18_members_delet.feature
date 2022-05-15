Feature: Eliminar un miembro creado

  @user1 @web
  Scenario: Ingreso a la aplicación y eliminar un miembro creado
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario18/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario18/dashboard.png"

    #acce to member
    When I click on icon members
    And I wait for 1 seconds
    And I click on new member
    And I wait for 1 seconds
    And I click on git name new member
    And I wait for 1 seconds
    And I enter text "$name_1"
    And I wait for 1 seconds
    And I click on git email new member "$name_1"
    And I wait for 1 seconds

    #Delet new member
    Then I click on save new member
    And I wait for 1 seconds
    And I click on icon members
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario18/member.png"
    And I click on new member created
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario18/memberselect.png"
    And I click on settings member
    And I wait for 1 seconds
    And I click on delete member
    And I wait for 3 seconds
    And I take one screenshot "./artifacts/v1/scenario18/memberdelete.png"
    And I click on confirm delete member
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario18/memberdeleteconfim.png"





