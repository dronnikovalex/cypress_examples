Feature: e2e add product to cart

  I want to add product to cart and validate total cost
  # Background section will be calling before each scenario
  Background:
    Given Log counter

  Scenario: Add product to cart and validate total cost
    Given I open home page
    When I choose "Apparel & accessories" category
    And I choose product "Fiorella Purple Peep Toes"
    And I add product to cart
    Then I see product in a cart with valid total coast

  Scenario: Second scenario
    Given I open home page
    When I choose "Apparel & accessories" category
    And I choose product "Fiorella Purple Peep Toes"
    And I add product to cart
    Then I see product in a cart with valid total coast