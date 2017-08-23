Feature: 01_Amazon: Add product to cart

  @smoke
  Scenario: 01_add product to shopping cart
#    Given I open homepage
    And The shopping cart has the count number "0"
    When I search for a product "Cleaner"
    And I select the first item in list
    And I add selected item
    Then The shopping cart has the count number "1"

#  @Regression
#  Scenario Outline: 02_category filter
#    When I select Category "<Category>" then Sub-category "<Sub Category>" in the menu
#    Then I should see results showing only for "<Sub Category>"
#
#    Examples:
#      | Category          | Sub Category     |
#      | Books             | Children's Books |
#      | Books             | Kindle Books     |
#      | Movies & TV Shows | Blu-ray          |
#      | Toys & Baby       | Car Seats        |