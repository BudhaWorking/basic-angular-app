var app=angular.module('myApp', ['ngRoute']);
app.controller('myController', ['$scope', function($scope){
	
	$scope.message="Hello Abhishek";
}])


/*app.config(['$locationProvider', function($locationProvider){
	$locationProvider.hashPrefix('')
}])*/

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
                $locationProvider.hashPrefix('')
	$routeProvider
	   .when('/',{

	   		templateUrl: "pages/home.html",
	   		controller:'myHomeController',
	   		caseInsensitiveMatch: true
	   })

	   .when('/register',{

	   		templateUrl: "pages/register.html",
	   		controller:'myRegisterController',
	   		caseInsensitiveMatch: true
	   })
	   .when('/login',{

	   		templateUrl: "pages/login.html",
	   		controller:'myLoginController',
	   		caseInsensitiveMatch: true
	   })

}])

app.controller('myHomeController', ['$scope', function($scope){
	
	$scope.message="Home";
}])
app.controller('myRegisterController', ['$scope', function($scope){
	
	$scope.message="Register";
}])
app.controller('myLoginController', ['$scope', function($scope){
	
	$scope.message="Login";
}])



/*app.run([function(){
		console.log("ths is my run method");
}])

app.controller('name', ['', function(){
	
}])([function(){
		console.log("ths is my run method");
	}])*/
