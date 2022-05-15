Feature: enviar invitacion nuevo mienbro

  @user1 @web
  Scenario: Ingreso a la aplicación y
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario15/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario15/dashboard.png"

    #acce to staff
    When I click on icon settings
    And I wait for 1 seconds
    And I click on staff
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario15/staf.png"

    #Preview send invitation
    Then I click on invite people
    And I wait for 3 seconds
    And I enter email new user "$name_1"
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario15/stafemail.png"
    And I click on sent invitation
    And I wait for 3 seconds
    And I take one screenshot "./artifacts/v1/scenario15/stafemailsend.png"
    And I reload page
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario15/stafflsit.png"



