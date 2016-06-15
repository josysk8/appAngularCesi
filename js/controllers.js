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
  Movie.get(246655).then(function(data){
    console.log(data.data);
    $scope.movie = data.data;
  }, function(err){
    console.error(err);
  });
})
    .controller("MovieCtrl", function($scope, Movie){
        Movie.get(551).then(function(data){
            console.log(data.data);
            $scope.movie = data.data;
        }, function(err){
            console.error(err);
        });

        var addVideotheque = function(id){
            var videotheque = localStorage.getItem("videotheque");
            videotheque = JSON.parse(videotheque);
            var film = "";
            Movie.get(id).then(function(data){
                film = data.data;
            });
            film = Array(data.id, data.title, 1);
            Array.prototype.push.apply(videotheque, film);
            localStorage.setItem("videotheque", videotheque);
            console.debug(localStorage.getItem('videotheque'))
        }
    })
;
