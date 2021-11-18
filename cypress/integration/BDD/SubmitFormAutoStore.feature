Feature: Test form submission on automation test store

  I want to submit form via contacts us page
  Scenario: Form submission
    Given I open home page
    When I click on ContactUs button
    And I fill inputs with correct data
      |firstname|email       |enquiry    |
      |test     |test@test.ru|Sample text|
    And I submit the form
    Then I see success message "Your enquiry has been successfully sent to the store owner!"