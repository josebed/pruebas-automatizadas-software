Feature: Editar nombre de perfil

  @user1 @web
  Scenario: Ingreso a la aplicación y editar nombre de perfil
    #Login
    Given I navigate to page "<url2>"
    And  I wait for 2 seconds
    And I enter username "<username2>"
    And I wait for 1 seconds
    And I enter password "<password2>"
    And I take one screenshot "./artifacts/v2/scenario20/login.png"
    And I click on sign in
    And I wait for 2 seconds
    And I take one screenshot "./artifacts/v2/scenario20/dashboard.png"

    #acce to profile
    When I click on photo profile2
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v2/scenario20/menuprofile.png"
    And I click on your profile2
    And I wait for 1 seconds
    And I click name2
    And I wait for 1 seconds
    And I enter text "$name_1"
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v2/scenario20/editprofile.png"

    #Preview new name
    Then I click on photo profile2
    And I wait for 1 seconds
    And I take one screenshot "./artifacts/v2/scenario20/changeprofie.png"

