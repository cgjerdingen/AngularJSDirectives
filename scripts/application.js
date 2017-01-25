// angularjs app

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.user = {
        name: 'Luke Skywalker',
        address: {
            street: '1742 Stanford Ave',
            city: 'Secret Rebel Base',
            planet: 'Yavin 4',
        },
        friends: [
            'Han',
            'Leia',
            'Chewbacca',
        ]
    
    };

    
});


angular.module('app').directive('userInfoCard', function() {
    return {
        templateUrl: "scripts/partials/userInfoCard.html",
        controller: function($scope) {
            $scope.favorite = function(user) {
                user.rank = "favorite";
            }    
        }
    }
} )