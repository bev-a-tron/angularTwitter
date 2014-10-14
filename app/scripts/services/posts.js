app.factory('Post', function($resource){
	return $resource('https://dazzling-torch-7191.firebaseio.com/posts/:id.json');
})