package runner;




import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="features",
		glue={"stepDefination"},
		plugin ={"html:target/cucumber-html-report",
				"pretty","html:target/html", "json:target/cucumber.json",
		         "junit:target/cucumber-reports/Cucumber.xml"
				}
		)
public class TestRunner {
	

}
