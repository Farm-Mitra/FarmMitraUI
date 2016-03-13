'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', '$timeout','demoFac', '$stateParams', function ($scope, $timeout,demoFac, $stateParams) {
    $scope.line = {
	    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	    series: ['Series A', 'Series B'],
	    data: [
	      [65, 59, 80, 81, 56, 55, 40],
	      [28, 48, 40, 19, 86, 27, 90]
	    ],
	    onClick: function (points, evt) {
	      console.log(points, evt);
	    }
    }; 

    $scope.bar = {
	    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
		series: ['Series A', 'Series B'],

		data: [
		   [65, 59, 80, 81, 56, 55, 40],
		   [28, 48, 40, 19, 86, 27, 90]
		]
    	
    };

    $scope.donut = {
    	labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	data: [300, 500, 100]
    };

    $scope.radar = {
    	labels:["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

    	data:[
    	    [65, 59, 90, 81, 56, 55, 40],
    	    [28, 48, 40, 19, 96, 27, 100]
    	]
    };

    $scope.pie = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	data : [300, 500, 100]
    };

    $scope.polar = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120]
    };

    $scope.dynamic = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120],
    	type : 'PolarArea',

    	toggle : function () 
    	{
    		this.type = this.type === 'PolarArea' ?
    	    'Pie' : 'PolarArea';
		}
    };
	
	$scope.change = function($event) {
		//$timeout(function() {

			  console.log($scope.form);

			//angular.element($event.target.form).triggerHandler('submit');
		//});
	};
	
    demoFac.fetchFVPlan("test").success(function(data){
        console.log(data);
        var price  = data[0];
        var priceLen = price.length;
        var counts = {};
		var idArr = [];
        for(var i= 0;i<priceLen;i++){
            if(counts[price[i].name] == undefined){
                counts[price[i].name] = 1;
				idArr[price[i].name] = price[i].id;
            } else {
                counts[price[i].name]++;
            }
        }
        var children = [];
        for(var k in counts){
            children.push({label:k,farmCount:counts[k],cropid:idArr[k]});  
        }
        $scope.cropPlan = {label:'farmVillage','children':children};     
		$scope.water = parseInt($stateParams.water);
    });
}]);