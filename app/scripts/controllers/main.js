'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
    .controller('MainCtrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {
        var todoInStorage = localStorageService.get('todos');
        $scope.todos = todoInStorage && todoInStorage.split('\n') || [];
        $scope.$watch('todos', function(){
            localStorageService.add('todos', $scope.todos.join('\n'));
        }, true);
        $scope.addTodo = function() {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };
        $scope.removeTodo = function(index) {
            $scope.todos.splice(index, 1);
        };
    }]);
