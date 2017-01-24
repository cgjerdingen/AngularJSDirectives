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
    
    }    
});

angular.module('app').directive('userInfoCard', function() {
    return {
        template: "<div>Name: {{ user.name }}</div><br /> <div ng-show='!!user.address'>Address:<br />{{ user.address.street }} <br />{{ user.address.city }} <br />{{ user.address.planet }}</div><br /><div>Friends: <div ng-repeat='friend in user.friends'>{{friend}}</div></div>"
    }
} )