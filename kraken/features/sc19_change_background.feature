Feature: Change background

  @user1 @web
  Scenario: Ingreso a la aplicación y cambiar el color de fondo
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I take one screenshot "./artifacts/v1/scenario19/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v1/scenario19/dashboard.png"

    #change color
    When I click on night shift
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario19/DarkmodeActivate.png"

    #Preview color
    Then I click on night shift
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v1/scenario19/DarkModeDeactivate.png"