Feature: Revocar invitacion nuevo staff

  @user1 @web
  Scenario: Ingreso a la aplicación y recoke nuevo staff
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario16/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario16/dashboard.png"

    #acce to staff
    When I click on icon settings
    And I wait for 1 seconds
    And I click on staff
    And I wait for 1 seconds

    #Revok invitation staff
    Then I click on invite people
    And I wait for 3 seconds
    And I enter email new user "$name_1"
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario16/invitation.png"
    And I click on sent invitation
    And I wait for 3 seconds
    And I reload page
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario16/listinvitation.png"
    And I revoke invitation
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario16/revokinvitation.png"




