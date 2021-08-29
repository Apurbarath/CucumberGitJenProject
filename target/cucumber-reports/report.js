$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Simple.feature");
formatter.feature({
  "line": 1,
  "name": "Sample feature",
  "description": "This is just sample feature",
  "id": "sample-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "User validating simple feature file",
  "description": "",
  "id": "sample-feature;user-validating-simple-feature-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@simple"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is able to see the homepage",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});