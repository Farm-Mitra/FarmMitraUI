// basic angular app setup
	var app = angular.module('sbAdminApp', ['ui-rangeSlider']);

	app.controller('DemoController',
		function DemoController($scope) {

			// just some values for the sliders
			$scope.demo1 = {
				min: 20,
				max: 80
			};

			$scope.demo2 = {
				range: {
					min: 0,
					max: 10050
				},
				minPrice: 1000,
				maxPrice: 4000
			};

			$scope.demo3 = {
				_min: 25,
				_max: 75,
				min: function(newValue) {
					return arguments.length ? ($scope.demo3._min = newValue) : $scope.demo3._min;
				},
				max: function(newValue) {
					return arguments.length ? ($scope.demo3._max = newValue) : $scope.demo3._max;
				}
			};

			$scope.demo4 = {
				rangeMin: 10,
				rangeMax: 1500,
				min: 80,
				max: 1000,
				disabled: false
			};

			// function for the button to disable / enable slider 3
			$scope.toggleDemo4 = function () {
				// toggle true / false
				$scope.demo4.disabled = !$scope.demo4.disabled;
			};

			$scope.demo5 = {
				min: 300,
				max: 800
			};

			$scope.demo6 = {
				min: 2000,
				max: 8000
			};

			$scope.demo7 = {
				valueA: 5000,
				valueB: 3000
			};

			$scope.demo8 = {
				range: {
					min: 0,
					max: 10050
				},
				minPrice: 1000,
				maxPrice: 4000
			};

			$scope.demo9 = {
				min: 3000,
				max: 5000
			};

		}
	);