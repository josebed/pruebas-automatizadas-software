Feature: enviar invitacion vacia nuevo mienbro

  @user1 @web
  Scenario: Ingreso a la aplicación y enviar invitacion sin email
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 2 seconds

    #acce to staff
    When I click on icon settings
    And I wait for 1 seconds
    And I click on staff
    And I wait for 1 seconds

    #sen invitation empty
    Then I click on invite people
    And I wait for 3 seconds
    And I click on sent invitation
    And I wait for 2 seconds


