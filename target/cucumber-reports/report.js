$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Simple.feature");
formatter.feature({
  "line": 1,
  "name": "SignIn features",
  "description": "user wants to check whether he is able to sign in or not",
  "id": "signin-features",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "user should validate whether four important links are present or not",
  "description": "",
  "id": "signin-features;user-should-validate-whether-four-important-links-are-present-or-not",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@mytest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on correct website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Simple.user_is_on_correct_website()"
});
formatter.result({
  "duration": 147253900,
  "status": "passed"
});
formatter.match({
  "location": "Simple.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 79900,
  "status": "passed"
});
formatter.match({
  "location": "Simple.user_should_see_the_home_page()"
});
formatter.result({
  "duration": 91200,
  "status": "passed"
});
});