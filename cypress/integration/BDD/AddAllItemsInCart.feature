Feature: e2e add all products in cart

  I want to add all products from homepage to cart
  # Background section will be calling before each scenario
  Background:
    Given I open home page

  Scenario: Add all product to cart and validate total count in cart
    When I add each product on page in cart
    Then I see correct count of items in the cart

  Scenario: Add all product to cart and validate total count in cart
    When I click on prefered brand
    Then I see page filtered by prefered brand