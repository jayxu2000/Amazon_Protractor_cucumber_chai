Feature: TC01_Amazon: user login and logout

  Background:
    Given I open homepage

  @smoke
  Scenario: 01_login as a member
    When I click sign in
    Then the "Sign in" page displays
    When I sign in as account "jxu@teksystems.com" with password "Teksystems7"
    Then I successfully login and be able to see my first name "Tek"