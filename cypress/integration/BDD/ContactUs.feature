Feature: e2e fill contanct us fomr

  I want to fill and submit contanct us form
  # Background section will be calling before each scenario
  Scenario: Successfull subbmission contact us form
    Given I open home page
    When I click ContanctUs button
    And I fill inputs
      |firstname|lastname |email       |comment    |
      |Alex     |Dronnikov|test@test.ru|Sample text|
    And I click submit button
    Then I see successfully form submission message
