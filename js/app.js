var app = angular.module('app', [
  'ngRoute',
  'ngResource'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).
      when('/dashboard', {
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'DashboardController'
      }).
      when('/statistics/performance', {
        templateUrl: 'views/statistics/statsperformance.html',
        controller: 'StatsPerformanceCtrl'
      }).
      when('/statistics/weight-bodyfat', {
        templateUrl: 'views/statistics/statsweightbf.html',
        controller: 'StatsWeightBFCtrl'
      }).
      when('/statistics/measurements', {
        templateUrl: 'views/statistics/statsmeasurements.html',
        controller: 'StatsMeasurementsCtrl'
      }).
      when('/statistics/areas', {
        templateUrl: 'views/statistics/statsareas.html',
        controller: 'StatsAreasCtrl'
      }).
      when('/goals/bodyfat', {
        templateUrl: 'views/goals/goalbodyfat.html',
        controller: 'GoalBodyFatController'
      }).
      when('/goals/bodyweight', {
        templateUrl: 'views/goals/goalbodyweight.html',
        controller: 'GoalBodyWeightController'
      }).
      when('/goals/bodymeasurements', {
        templateUrl: 'views/goals/goalmeasurements.html',
        controller: 'GoalMeasurementsController'
      }).
      when('/goals/performance', {
        templateUrl: 'views/goals/goalperformance.html',
        controller: 'GoalPerformanceController'
      }).
      when('/measures/measurements', {
        templateUrl: 'views/measures/measuremeasurements.html',
        controller: 'MeasureMeasurementsController'
      }).
      when('/measures/weight', {
        templateUrl: 'views/measures/measureweight.html',
        controller: 'MeasureWeightController'
      }).
      when('/measures/bodyfat', {
        templateUrl: 'views/measures/measurebodyfat.html',
        controller: 'MeasureBodyFatController'
      }).
      when('/exercices/exercices', {
        templateUrl: 'views/exercices/exerciceexercices.html',
        controller: 'ExerciceExercicesController'
      }).
      when('/exercices/workouts', {
        templateUrl: 'views/exercices/exerciceworkouts.html',
        controller: 'ExerciceWorkoutsController'
      }).
      when('/plan', {
        templateUrl: 'views/plan/plan.html',
        controller: 'PlanController'
      }).
      when('/track', {
        templateUrl: 'views/track/track.html',
        controller: 'TrackController'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
