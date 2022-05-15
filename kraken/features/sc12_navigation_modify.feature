Feature: modificar nombre de url creada

  @user1 @web
  Scenario: Ingreso a la aplicación y modificar nombre de url creada
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario12/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario12/dashboard.png"

    #acce to navigation urls
    When I click on icon settings
    And I wait for 1 seconds
    And I click on navigations
    And I wait for 1 seconds
    And I click on git name new url
    And I wait for 1 seconds
    And I enter text "$name_1"
    And I wait for 1 seconds
    And I click on modify url git name
    And I wait for 1 seconds
    And I enter text "$$name_1"
    And I wait for 1 seconds

    #modify url navigation
    Then I click on save navigation
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario12/navigation.png"
    And I click on name for modifity
    And I wait for 1 seconds
    And I enter text "$name_2"
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario12/navigationmodifyname.png"
    And I click on save navigation
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario12/navigationmodifynamesave.png"


