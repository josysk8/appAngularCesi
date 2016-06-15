angular.module('myapp',
  ['ui.router', 'myapp.controllers',
  'myapp.services'])
.config(function($stateProvider,
                 $urlRouterProvider){

  $stateProvider
    .state('notes', {
      url: '/notes',
      templateUrl:'partials/notes.html',
      controller: 'NotesCtrl'
    })
    .state('add-note',{
      url: '/notes/add',
      templateUrl:'partials/new.html',
      controller: "NoteCtrl"
    })
    .state('note', {
      url: '/notes/:note_id',
      templateUrl: 'partials/note.html',
      controller: 'NoteCtrl'
    })
    .state('edit-note', {
      url: '/notes/:note_id/edit',
      templateUrl: 'partials/edit.html',
      controller: 'NoteCtrl'
    })
    .state('movie', {
      url: '/movie',
      templateUrl: 'partials/movie.html',
      controller: 'MovieCtrl',
      views:{
        'sidebar' : {
          templateUrl: "movieSidebar.html",
          controller: "SidebarCtrl"
        }
      }
    })
    ;

  $urlRouterProvider.otherwise("/movie");
});
