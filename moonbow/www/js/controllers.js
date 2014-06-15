angular.module('starter.controllers', [])

.controller('StatusCtrl', function($scope) {
})
.controller('AppCtrl', function($scope) {
})
.controller('BrowseCtrl', function($scope) {
})
.controller('SyncCtrl', function($scope) {
})
.controller('DeviceSettingsCtrl', function($scope) {
})
.controller('AccountSettingsCtrl', function($scope) {
})
.controller('WifiSettingsCtrl', function($scope) {
})
.controller('InfoCtrl', function($scope) {
})

.directive('todo', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.bind('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                alert("This is not implemented yet.");
            });
            element.addClass('hidden');
        }
    };
 });