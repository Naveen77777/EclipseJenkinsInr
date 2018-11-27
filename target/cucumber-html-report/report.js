$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : My WORLD application Login"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "MyWorld application login",
  "description": "",
  "id": "myworld-application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "Test with login valid credentials",
  "description": "",
  "id": "myworld-application-login;test-with-login-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "A Open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "B Enter valid \"naveenm2@kpit.com\" and valid \"mnk_77788\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "C User should able to login successfully and navigated to Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "D User Clicked on Timelog button and Enter the Timelog for the Tue and Thu days for Hrs",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoketest.a_open_chrome_and_start_application()"
});
formatter.result({
  "duration": 15753216210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenm2@kpit.com",
      "offset": 15
    },
    {
      "val": "mnk_77788",
      "offset": 45
    }
  ],
  "location": "Smoketest.b_enter_valid_mailid_and_valid_password(String,String)"
});
formatter.result({
  "duration": 4224943594,
  "status": "passed"
});
formatter.match({
  "location": "Smoketest.user_should_able_to_login_successfully_and_navigated_to_Home_page()"
});
formatter.result({
  "duration": 8961707553,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});