'use strict';

app.controller('PostsCtrl', function($scope, Post){
	$scope.posts = Post.get();
	$scope.post = {url:'http://', title:''};

	$scope.submitPost = function() {
		$scope.posts.push($scope.post);
		$scope.post = {url:'http://', title:''};
	};

	$scope.deletePost = function(index) {
		$scope.posts.splice(index, 1);
	};
});