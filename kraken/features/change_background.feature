Feature: Change background

  @user1 @web
  Scenario: Ingreso a la aplicación y cambiar el color de fondo
    #Login
    Given I navigate to page "<url>"
    And  I wait for 2 seconds
    And I enter username "<username>"
    And I wait for 1 seconds
    And I enter password "<password>"
    And I click on sign in
    And I wait for 2 seconds

    #change color
    When I click on night shift
    And I wait for 1 seconds


    #Preview color
    Then I click on night shift
    And I wait for 1 seconds
