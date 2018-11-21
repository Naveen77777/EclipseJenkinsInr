#Author: your.email@your.domain.com
#Keywords Summary : My WORLD application Login
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: MyWorld application login

  @tag1
  Scenario: Test with login valid credentials
    Given Open Firefox and start application
    When Enter valid "naveenm2@kpit.com" and valid "mnk_77788"
    Then User should able to login successfully and navigated to Home page
    Then  User Clicked on Timelog button and Enter the Timelog for the Tue and Thu days for Hrs
    

    
   # Examples: 
    #  | username           | password  |
    #  | naveenm2@kpit.com  | mnk_77788 | 
       
  @tag2
  Scenario: Attendance Over view
       Then User clicked on KPMS link and User nagivated to KPMS website
       
       