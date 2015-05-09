angular.module('MessagesControllers', [])

    .controller('MessagesController', ['$scope', function ($scope) {
        $scope.messages = [];
        
        $scope.addMessage = function () {
            if ($scope.message_text.length > 1) {
                $scope.messages.push({ 'text': $scope.message_text, 'current_datetime': new Date })
                $scope.message_text = "";
            }
            else {
                alert("Please enter some message.");
            }
        };
    }]);
