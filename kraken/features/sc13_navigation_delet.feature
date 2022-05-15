Feature: borrar una url de navegacion

  @user1 @web
  Scenario: Ingreso a la aplicación y borrar una url de navegacion
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario13/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario13/dashboard.png"


    #acce to navigation
    When I click on icon settings
    And I wait for 1 seconds
    And I click on navigations
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario13/navigatelist.png"
    And I click on git name new url
    And I wait for 1 seconds
    And I enter text "$name_1"
    And I wait for 1 seconds
    And I click on modify url git name
    And I wait for 1 seconds
    And I enter text "$$name_1"
    And I wait for 1 seconds

    # delet url navigate
    Then I click on save navigation
    And I wait for 1 seconds
    And I click on trash icon
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario13/deleteurlnavigate.png"
    And I click on save navigation
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario13/deleteurlnavigatesave.png"


