angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("home.html","<h1> Welcome to the home view </h1>\n<br/>\n<hr/>\n<br/>\n<h2>Is Angular is working:</h2>\n<h4 ng-bind=\"angularTest\">Not working</h4>");
$templateCache.put("view1.html","<h1> This is view 1 </h1>");
$templateCache.put("view2.html","<h1>This is view 2 </h1>");}]);