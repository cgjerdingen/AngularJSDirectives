// angularjs app

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.user1 = {
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

    $scope.user2 = {
        name: 'Han Solo',
        address: {
            street: '321 19th Ave S',
            city: 'Mos Eisely',
            planet: 'Tattoine',
        },
        friends: [
            'Luke',
            'Leia',
            'Chewbacca',
        ]
    
    };
    
});


angular.module('app').directive('userInfoCard', function() {
    return {
        templateUrl: "scripts/partials/userInfoCard.html",
        scope: { user: "=" }  ,
        controller: function($scope) {
            $scope.favorite = function(user) {
                user.rank = "favorite";
            }
        }
    }
} )