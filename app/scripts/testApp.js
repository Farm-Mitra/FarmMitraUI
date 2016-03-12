var testApp = angular.module('sbAdminApp');


testApp.factory("demoFac", ['$http',function($http){  
	var obj = {};
	
	obj.fetchUserDetails = function(){   /*This just to demonstrate common usage of factories to serve $http responses, by returning the entire promise */
		
          return $http({method : 'GET',url : 'http://10.244.25.67:8080/farmmitra/rest/fpcl/1/farmvillage/'});
        
        //return $http.get('mockjson/userprofile.json');
	}
    
    
    obj.fetchFarmerDetails = function(){   /*This just to demonstrate common usage of factories to serve $http responses, by returning the entire promise */
		
          return $http({method : 'GET',url : 'http://10.244.25.67:8080/farmmitra/rest/fpcl/1/farmvillage/'});
        
        //return $http.get('mockjson/userprofile.json');
	}
    
    
    
    
	//http://10.244.25.35:8080/farmmitra/rest/fpcl/1/farmvillage/	
	return obj;		

}]);

testApp.controller('testCtrl',function($scope,demoFac){

    //Farm Village detai;s API
    demoFac.fetchUserDetails().success(function(response){ 
			$scope.userDetail = response;
		});
		
    //farmers detai;s API
    demoFac.fetchFarmerDetails().success(function(response){ 
			$scope.farmers = response;
		});
    
	
	
	
});