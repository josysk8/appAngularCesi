angular.module('myapp.controllers', [])
.controller('NotesCtrl', function($scope, Note){
  //$scope.notes = Note.all();

  var success = function(data) {
    console.log(data);
  };
  var error = function(error) {
    console.error(error);
  };
  var progress = function(p) {
    console.log(p);
  };
  Note.all().then(success, error, progress);
  /*Note.all().then(
    function(notes){ // Callback de success
      $scope.notes = notes;
    }, function(err){ // Callback d'erreur
      console.error(err);
    }, function(progress) { // Callback de progression
      console.log(progress);
    });*/


$scope.clear = function() {
  $scope.notes = Note.clear();
}
})
.controller('NoteCtrl', function($scope, $stateParams, $location, Note){
  $scope.note = Note.get($stateParams.note_id);

  $scope.save = function(){
    var index = Note.insert($scope.note);
    $location.path('/notes/' + index);
  };

  $scope.delete = function(){
    Note.delete($stateParams.note_id);
    $location.path("/notes");
  };
})
.controller("SearchMovieCtrl", function($scope, Movie){
  $scope.movies = [];
  $scope.keyPress = function(query)
  {
    Movie.all(query).then(function(data){

      $scope.movies = data.data['results'];
      console.log(data.data['results']);
    }, function(err){
      console.error(err);
    });
  }
});
