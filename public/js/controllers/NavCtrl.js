app.controller('NavCtrl',function($scope,NavOptions,$timeout){
	$scope.navOptions = NavOptions.getNav();
	$scope.section = 'Section';
	$scope.location = 'Page Title';
	$scope.user = {name:'Donovan Beck'}
	$scope.menuToggle = function(){
		if($scope.menuOpen){
			$scope.menuOpen = false;
			$scope.menuTrans = false;
			$scope.closeIcon = false;
		}else{
			$scope.menuOpen = true;
			$scope.menuTrans = true;
			$timeout(function(){
				$scope.closeIcon = true;
			},110)
		}
	}
})