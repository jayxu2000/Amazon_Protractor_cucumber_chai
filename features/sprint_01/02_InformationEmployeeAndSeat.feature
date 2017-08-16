Feature: 2 - Employee information corresponds to a desk.

  Background:
    Given I call Location api and get seats information for all locations

  Scenario Outline: 1 - The Employees last name followed by first name and seat need to be color-coded based
  on the project name which the employee is assigned
    Given I open home page
    And I select "<Location>" in combobox
    Then Correct map is displayed for chosen "<Location>" location
    Then All seat background colors match the projects in location "<Location>"

    Examples:
      | Location       |
      | McGill College |
      | Maisonneuve    |

  Scenario Outline: 2 - View Empty desks - no color or name assigned
    Given I open home page
    And I select "<Location>" in combobox
    And I call Location api and get empty seats information for location "<Location>"
    Then all empty seats in the location are displayed with corresponding seat number
    Then all empty desks are displayed with blank square in the location

    Examples:
      | Location       |
      | McGill College |
      | Maisonneuve    |