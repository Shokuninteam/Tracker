app.controller('GoalMeasurementsController', [
	'$scope',

	'Measurements',
	'MeasurementsGoal',

	function ($scope, Measurements, MeasurementsGoal) {

		$scope.measurements = Measurements.all(draw);
		$scope.measurementsGoals = MeasurementsGoal.byUser({user_id : 1});
		$scope.newGoal = new MeasurementsGoal();
		$scope.newGoal.date = new Date();

		function draw(){
			var height = 400,
				width = 200,
				paper = new Raphael(document.getElementById('raphael-canevas'), width, height),
				image = paper.image("img/svg/body-front.svg", 0, 0, width, height);

			$scope.tabLine = [];
			for (var i = 0; i < $scope.measurements.length; i++) {
				var measurement = $scope.measurements[i]
				drawMeasurements(measurement, paper, width, height);
			}
		}

		function drawMeasurements(measurement, paper, width, height){
			var path = "Mx1 y1Lx2 y2".replace("x1", measurement.x1*width/100).replace("y1", measurement.y1*height/100).replace("x2", measurement.x2*width/100).replace("y2", measurement.y2*height/100),
				svg = paper.path(path).attr({"stroke" : "grey", "stroke-width" : 3});

			$scope.tabLine.push({
				measurement : measurement,
				line : svg
			});
			svg.hover(function(){
				document.getElementById("raphael-canevas").style.cursor = "pointer";
			}, function(){
				document.getElementById("raphael-canevas").style.cursor = "default";
			});
			svg.click(function(){
				$scope.$apply(function(){
					$scope.measurement = measurement;
				});
				$scope.changeMeasurements(measurement);
			});
		}

		$scope.changeMeasurements = function(measurement){
			for (var i = 0; i < $scope.tabLine.length; i++) {
				var tabLine = $scope.tabLine[i];
				if(tabLine.measurement.id === measurement.id){
					tabLine.line.attr("stroke", "#E74C3C");
				} else {
					tabLine.line.attr("stroke", "grey");
				}
			}
		};

		$scope.save = function(){
			$scope.newGoal.users_id = 1;
			$scope.newGoal.measurements_id = $scope.measurement.id;
			$scope.newGoal.$save();
		};

		$scope.$watch('measurement', function(newValue, oldValue) {
			if(newValue){
				for (var i = 0; i < $scope.measurementsGoals.length; i++) {
					var goal = $scope.measurementsGoals[i];
					if(goal.measurements_id === newValue.id){
						$scope.selectedGoal = goal;
					}
				}
			}
		});
}]);