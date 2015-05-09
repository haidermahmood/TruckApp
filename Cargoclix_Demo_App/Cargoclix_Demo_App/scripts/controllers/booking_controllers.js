angular.module('BookingControllers', [])

    .controller('BookingListingController', ['$http', '$scope', function ($http, $scope) {
        var url = "http://localhost:55011/api/Booking/?phone_number=" + $scope.phone_number + "&callback=JSON_CALLBACK";
        $scope.bookings = [];
        $http.jsonp(url)
            .success(function (booking_list) {
                console.log(booking_list);
                $scope.bookings = booking_list;
            });

        $scope.setCurrentBooking = function (booking) {
            $scope.$parent.currentBooking = booking;
        };
    }])

    .controller('BookingDetailController', ['$http', '$scope', function ($http, $scope) {
        $scope.displayMessage = function () {
            alert("Action should be executed or cancelled.");
        };
    }])

    .controller('ReportDelayController', ['$http', '$scope', function ($http, $scope) {
        $scope.delay_time = new Date();
        $scope.reason_for_delay = "Traffic jam";

        $scope.hstep = 1;
        $scope.mstep = 1;

        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };

        $scope.saveReasonForDelay = function () {
            var url = "http://localhost:55011/api/Booking/" + $scope.currentBooking.Id;
            console.log($scope.delay_time);
            console.log(url);
            console.log($scope.reason_for_delay);
            console.log($scope.reason_text);
            
            var am_pm = ($scope.delay_time.getHours() < 12) ? "am" : "pm";
            var hours = $scope.delay_time.getHours() === 0 ? 12 : ($scope.pad($scope.delay_time.getHours() % 12))

            var time = hours + ":" + $scope.pad($scope.delay_time.getMinutes()) + " " + am_pm;
            var delay_text = $scope.reason_for_delay === "Free Text" ? $scope.reason_text : $scope.reason_for_delay
            $http.put(url, { NewETA: time, ReasonForDelay: delay_text }).
                  success(function (data, status, headers, config) {
                      alert("Booking Delay Updated.");
                  }).
                  error(function (data, status, headers, config) {
                      alert("Error Occurred.");
                  });
            
        };

        $scope.pad = function (hour) {
            hour = hour + '';
            return hour.length >= 2 ? hour : new Array(2 - hour.length + 1).join(0) + hour;
        }
    }]);
