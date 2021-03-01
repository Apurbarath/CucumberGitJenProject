package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features="feature/Simple.feature",
				glue = {"stepDefinations"},
				dryRun=false ,
				monochrome=true,
				tags = {"@mytest"})

public class MyRunner {

}
