app.directive('arrow', function() {
    return {
        templateUrl: 'partials/arrow.html',
        restrict: 'E',
        controller: arrowCtrl,
        scope: {},
        link: function(scope, element, attrs) {
            scope.direction = attrs.direction;
            element.find('span')
                .addClass(attrs.direction === 'left' ?
                    'fa-arrow-circle-left' :
                    'fa-arrow-circle-right');
        }
    };
});
