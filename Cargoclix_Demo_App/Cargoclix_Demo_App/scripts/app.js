'use strict';


angular.module('certificationExamApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ui.bootstrap',

            'LoginControllers',
            'BookingControllers',
            'MessagesControllers'
])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            var root_path = window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1);
            // configure html5 to get links working on jsfiddle
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/login', {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginController'
                }).when('/booking-listing', {
                    templateUrl: 'templates/bookinglisting.html',
                    controller: 'BookingListingController'
                }).when('/booking-detail', {
                    templateUrl: 'templates/bookingdetail.html',
                    controller: 'BookingDetailController'
                }).when('/report-delay', {
                    templateUrl: 'templates/reportdelay.html',
                    controller: 'ReportDelayController'
                }).when('/messages', {
                    templateUrl: 'templates/messages.html',
                    controller: 'MessagesController'
                }).otherwise({
                    redirectTo: '/login'
                });

            
        }])
    .controller('MainController', ['$route', '$routeParams', '$location', '$scope', function ($route, $routeParams, $location, $scope) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;

            $scope.root_path = location.href.substr(0, window.location.href.lastIndexOf('/') + 1);
            $scope.header_url = $scope.root_path + 'templates/user_header.html';
            
        }]);