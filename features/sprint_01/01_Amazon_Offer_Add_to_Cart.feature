Feature: Demo Test Cases For Amazon

  @smoke
  Scenario: add product to shopping cart
    Given I open the amazon homepage
    And The shopping cart has the count number "0"
#    When I search for a product "Cleaner"
#    And I select the first item in list
#And I add selected item
#Then The shopping cart has the count number "1"
#
#@Regression
#Scenario Outline: Category Filter
#Given I am a guest user
#When I select "<Category>" then "<Sub Category>" in the main menu
#Then I should see results showing only for "<Sub Category>"
#
#  Examples:
#  | Category			| Sub Category		|
#  | Books      			| Children's Books  |
#  | Books      			| Kindle Books      |
#  | Movies & TV Shows   | Blu-ray           |
#  | Toys & Baby  		| Car Seats       	|