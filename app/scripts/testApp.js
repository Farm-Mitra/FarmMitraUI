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
    
    obj.fetchWaterDetails = function(){   /*This just to demonstrate common usage of factories to serve $http responses, by returning the entire promise */
		
          return $http({method : 'GET',url : 'http://10.244.25.67:8080/farmmitra/rest/fpcl/1/waterdetail/'});
        
        //return $http.get('mockjson/userprofile.json');
	}
    
     obj.fetchfarmforFVDetails = function(){   /*This just to demonstrate common usage of factories to serve $http responses, by returning the entire promise */
		
          return $http({method : 'GET',url : 'http://10.244.25.67:8080/farmmitra/rest/farmvillage/13/farm/'});
        
        //return $http.get('mockjson/userprofile.json');
	}
    
    
	//http://10.244.25.35:8080/farmmitra/rest/fpcl/1/farmvillage/	
	return obj;		

}]);

//get the coount of all the data
testApp.controller('allCountCntrl',function($scope,demoFac,$state,$stateParams){

    //Farm Village detai;s API
    demoFac.fetchUserDetails().success(function(response){ 
			$scope.farmVillageCount = response.length;
		});


   //farmers detai;s API
    demoFac.fetchFarmerDetails().success(function(response){ 
			$scope.farmersCount = response.length;
		});

     //farms detai;s API
    demoFac.fetchFarmDetails().success(function(response){ 
			$scope.farmsCount = response.length;
		});
	

     //farms detai;s API
    demoFac.fetchDeviceDetails().success(function(response){ 
			$scope.devicesCount = response.length;
		});
    
     //farms detai;s API
    demoFac.fetchWaterDetails().success(function(response){ 
			$scope.waterCount = response;
		});
    
     demoFac.fetchWaterDetails().success(function(response){ 
			$scope.water = response;
		});
    // clickFunctions
    $scope.showFarmVillages = function(obj){
        console.log($stateParams);
        $state.go('dashboard.farmVillages',{fpclid:obj})
    }
    $scope.showFarmers= function(){
        $state.go('dashboard.farmers')
    }
    $scope.showFarms= function(){
        $state.go('dashboard.farms')
    }
    $scope.showMitras= function(){
        $state.go('dashboard.devices')
    }
	
});	
	



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

