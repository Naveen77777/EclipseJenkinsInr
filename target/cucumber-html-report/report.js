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
  "name": "Open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Enter valid \"naveenm2@kpit.com\" and valid \"mnk_77788\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should able to login successfully and navigated to Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User Clicked on Timelog button and Enter the Timelog for the Tue and Thu days for Hrs",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoketest.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 15650609792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenm2@kpit.com",
      "offset": 13
    },
    {
      "val": "mnk_77788",
      "offset": 43
    }
  ],
  "location": "Smoketest.enter_valid_mailid_and_valid_password(String,String)"
});
formatter.result({
  "duration": 4354976977,
  "status": "passed"
});
formatter.match({
  "location": "Smoketest.user_should_able_to_login_successfully_and_navigated_to_Home_page()"
});
formatter.result({
  "duration": 9232102629,
  "status": "passed"
});
formatter.match({
  "location": "Smoketest.user_Clicked_on_Timelog_button_and_Enter_the_Timelog_for_the_Tue_and_Thu_days_for_Hrs()"
});
formatter.result({
  "duration": 29725909994,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"__item12-idhomeToView1--myTable-0_cell0\"}\nCommand duration or timeout: 20.08 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027L-8850\u0027, ip: \u0027169.254.116.49\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d43.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 7aa10834-b722-42c8-a789-0fcffc7eed10\n*** Element info: {Using\u003dcss selector, value\u003d__item12-idhomeToView1--myTable-0_cell0}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:492)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat stepDefination.Smoketest.user_Clicked_on_Timelog_button_and_Enter_the_Timelog_for_the_Tue_and_Thu_days_for_Hrs(Smoketest.java:70)\r\n\tat ✽.Then User Clicked on Timelog button and Enter the Timelog for the Tue and Thu days for Hrs(MyApplication.feature:27)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"__item12-idhomeToView1--myTable-0_cell0\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027L-8850\u0027, ip: \u0027169.254.116.49\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/naveenm2/AppData/Local/Temp/anonymous7750389405071452803webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/naveenm2/AppData/Local/Temp/anonymous7750389405071452803webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "# Examples:"
    },
    {
      "line": 32,
      "value": "#  | username           | password  |"
    },
    {
      "line": 33,
      "value": "#  | naveenm2@kpit.com  | mnk_77788 |"
    }
  ],
  "line": 36,
  "name": "Attendance Over view",
  "description": "",
  "id": "myworld-application-login;attendance-over-view",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User clicked on KPMS link and User nagivated to KPMS website",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoketest.user_clicked_on_KPMS_link_and_User_nagivated_to_KPMS_website()"
});
formatter.result({
  "duration": 239787,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefination.Smoketest.user_clicked_on_KPMS_link_and_User_nagivated_to_KPMS_website(Smoketest.java:103)\r\n\tat ✽.Then User clicked on KPMS link and User nagivated to KPMS website(MyApplication.feature:37)\r\n",
  "status": "failed"
});
});