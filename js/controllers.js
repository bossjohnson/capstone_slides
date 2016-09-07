app.controller('slideCtrl', slideCtrl);

function slideCtrl($scope, $rootScope, $state) {
    // console.log($rootScope);
}
slideCtrl.$inject = ['$scope', '$rootScope', '$state'];

app.controller('arrowCtrl', arrowCtrl);

function arrowCtrl($scope, $rootScope, $state) {
    $scope.next = function() {
        var index = $rootScope.states.indexOf($state.current.name);
        var next = $scope.direction === 'left' ? index - 1 : index + 1;
        $rootScope.state = $rootScope.states[next];
        if ($rootScope.states[next]) {
            $state.go($rootScope.states[next])
        };
    }
}
arrowCtrl.$inject = ['$scope', '$rootScope', '$state'];
