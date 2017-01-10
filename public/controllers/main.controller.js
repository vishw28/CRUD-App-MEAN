(function () {
    'use strict';

    var app = angular.module('myApp',[]);

        app.controller('MainController',['$scope','$http',function($scope,$http) {

            var refresh = function () {
                $http.get('/contactlist').then(function (response) {
                    $scope.contactlist = response.data;
                    $scope.contact = "";
                });
            };
            refresh();

            $scope.addContact = function () {
                $http.post('/contactlist',$scope.contact).then(function (response) {
                    console.log(response.data);
                    refresh();
                })
            }

            $scope.removeContact = function (id) {
                $http.delete('/contactlist/' +id).then (function(response) {
                    console.log(response.data);
                    refresh();
                })
            }

            $scope.editContact = function (id) {
                $http.get('/contactlist/' +id).then (function(response) {
                    $scope.contact = response.data;
                })
            }

            $scope.updateContact = function () {
                $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then (function (respose) {
                    refresh();
                })
            }

        }]);
})();
