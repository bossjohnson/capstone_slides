var app = angular.module('capstoneSlides', ['ngAnimate', 'ui.router']);

app.run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.states = [
            'who',
            'why',
            'what',
            'how'
        ];
        $rootScope.state = 'who';
    })
    // .$inject = ['$rootScope', '$state', '$stateParams'];

app.config(function($stateProvider) {
    $stateProvider
        .state('who', {
            url: '/who',
            templateUrl: 'partials/who.html'
        })
        .state('why', {
            url: '/why',
            templateUrl: 'partials/why.html'
        })
        .state('what', {
            url: '/what',
            templateUrl: 'partials/what.html'
        })
        .state('how', {
            url: '/how',
            templateUrl: 'partials/how.html'
        });
});
