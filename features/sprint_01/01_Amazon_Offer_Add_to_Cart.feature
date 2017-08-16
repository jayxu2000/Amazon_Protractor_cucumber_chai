Feature: Demo Test Cases For Amazon

@smoke
Scenario: Offer Add to Cart
Given I am a guest user
When I search for an offer "Cleaner"
And I select the first deal
And I add select purchase
Then I should see the offer added to my cart

@Regression
Scenario Outline: Category Filter
Given I am a guest user
When I select "<Category>" then "<Sub Category>" in the main menu
Then I should see results showing only for "<Sub Category>"

  Examples:
  | Category			| Sub Category		|
  | Books      			| Children's Books  |
  | Books      			| Kindle Books      |
  | Movies & TV Shows   | Blu-ray           |	
  | Toys & Baby  		| Car Seats       	|