Feature: nuevo lin navegacion

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

    #acce to navegation
    When I click on icon settings
    And I wait for 1 seconds
    And I click on navigations
    And I wait for 1 seconds

#    #Preview new name link
#    Then I click on invite people
#    And I wait for 1 seconds



