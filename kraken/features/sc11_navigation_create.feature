Feature: crear nueva url de navegacion

  @user1 @web
  Scenario: Ingreso a la aplicación y crear nueva url de navegacion
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario11/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario11/dashboard.png"

    #acce to navigation
    When I click on icon settings
    And I wait for 1 seconds
    And I click on navigations
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario11/navegation.png"
    And I click on git name new url
    And I wait for 1 seconds
    And I enter text "$name_1"
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario11/navegationnewname.png"
    And I click on modify url git name
    And I wait for 1 seconds
    And I enter text "$$name_1"
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario11/navegationnewurl.png"

    # save new url
    Then I click on save navigation
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario11/navegationnewurlsave.png"




