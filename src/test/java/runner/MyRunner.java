package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features="feature/Simple.feature",
		plugin = { "pretty", "html:target/cucumber-reports","json:target/cucumber-reports/Cucumber.json" },
				glue = {"stepDefinations"},
				dryRun=false ,
				monochrome=true,
				tags = {"@mytest"})

public class MyRunner {

}
