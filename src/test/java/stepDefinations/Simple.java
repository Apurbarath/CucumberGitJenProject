package stepDefinations;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Simple{
		
	
	@Given("^user is on correct website$")
	public void user_is_on_correct_website(){
		System.out.println("user is on correct website");
	}

	@When("^user clicks on login button$")
	public void user_clicks_on_login_button(){
		System.out.println("user clicks on login button");
	}

	@Then("^user should see the home page$")
	public void user_should_see_the_home_page(){
		System.out.println("user should see the home page");
	}

}
