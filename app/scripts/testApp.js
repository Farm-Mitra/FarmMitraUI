var testApp = angular.module('sbAdminApp');


testApp.factory("demoFac", ['$http',function($http){  
	var obj = {};
	
	obj.fetchUserDetails = function(){   /*This just to demonstrate common usage of factories to serve $http responses, by returning the entire promise */
		
          return $http({method : 'GET',url : 'http://10.244.25.67:8080/farmmitra/rest/fpcl/1/farmvillage/'});
        
        //return $http.get('mockjson/userprofile.json');
	}
    
    
    obj.fetchFarmerDetails = function(){   /*This just to demonstrate common usage of factories to serve $http responses, by returning the entire promise */
		
          return $http({method : 'GET',url : 'http://10.244.25.67:8080/farmmitra/rest/fpcl/1/farmer/'});
        
        //return $http.get('mockjson/userprofile.json');
	}
    
     obj.fetchFarmDetails = function(){   /*This just to demonstrate common usage of factories to serve $http responses, by returning the entire promise */
		
          return $http({method : 'GET',url : 'http://10.244.25.67:8080/farmmitra/rest/fpcl/1/farm/'});
        
        //return $http.get('mockjson/userprofile.json');
	}
     
      obj.fetchDeviceDetails = function(){   /*This just to demonstrate common usage of factories to serve $http responses, by returning the entire promise */
		
          return $http({method : 'GET',url : 'http://10.244.25.67:8080/farmmitra/rest/fpcl/1/device/'});
        
        //return $http.get('mockjson/userprofile.json');
	}
    
    
    
    
	//http://10.244.25.35:8080/farmmitra/rest/fpcl/1/farmvillage/	
	return obj;		

}]);

testApp.controller('farmVillageCntrl',function($scope,demoFac){

    //Farm Village detai;s API
    demoFac.fetchUserDetails().success(function(response){ 
			$scope.userDetail = response;
		});
});	

testApp.controller('farmerCntrl',function($scope,demoFac){

   //farmers detai;s API
    demoFac.fetchFarmerDetails().success(function(response){ 
			$scope.farmers = response;
		});
});
    

testApp.controller('farmCntrl',function($scope,demoFac){
     //farms detai;s API
    demoFac.fetchFarmDetails().success(function(response){ 
			$scope.farms = response;
		});
	
});	

testApp.controller('deviceCntrl',function($scope,demoFac){
     //farms detai;s API
    demoFac.fetchDeviceDetails().success(function(response){ 
			$scope.devices = response;
		});
	
});	
	 
