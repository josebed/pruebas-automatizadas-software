Feature: enviar invitacion nuevo mienbro v2

  @user1 @web
  Scenario: Ingreso a la aplicación y
    #Login
    Given I navigate to page "<url2>"
    And  I wait for 2 seconds
    And I enter username "<username2>"
    And I wait for 1 seconds
    And I enter password "<password2>"
    And I take one screenshot "./artifacts/v2/scenario15/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v2/scenario15/dashboard.png"

    #acce to staff
    And I click on ref staff
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v2/scenario15/staf.png"

    #Preview send invitation
    Then I click green on invite people
    And I wait for 3 seconds
    And I enter email2 new user "$name_1"
    And I wait for 6 seconds
    And I take one screenshot "./artifacts/v2/scenario15/stafemail.png"
    And I click on sent2 invitation
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v2/scenario15/stafemailsend.png"
    And I reload page
    And I wait for 3 seconds
    And I take one screenshot "./artifacts/v2/scenario15/stafflsit.png"



