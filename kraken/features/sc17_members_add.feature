Feature: adicionar miembro

  @user1 @web
  Scenario: Ingreso a la aplicación y adicion un miembro
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario17/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario17/dashboard.png"

    #acce to member
    When I click on icon members
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario17/memberempty.png"
    And I click on new member
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario17/newmenber.png"
    And I click on git name new member
    And I wait for 1 seconds
    And I enter text "$name_1"
    And I wait for 1 seconds
    And I click on git email new member "$name_1"
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario17/newmenberdata.png"

    # Create new menber
    Then I click on save new member
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario17/savenewmember.png"
    And I click on icon members
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario17/listnewmember.png"





