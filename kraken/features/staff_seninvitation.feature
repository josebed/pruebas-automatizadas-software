Feature: Editar nombre de perfil

  @user1 @web
  Scenario: Ingreso a la aplicación y editar nombre de perfil
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 2 seconds

    #acce to profile
    When I click on icon settings
    And I wait for 1 seconds
    And I click on staff
    And I wait for 1 seconds

#    #Preview new name
#    Then I click on invite people
#    And I wait for 1 seconds
#    And I click on sent invitation
#    And I wait for 2 seconds

