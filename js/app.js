angular.module('myapp',
  ['ui.router', 'myapp.controllers',
  'myapp.services'])
.config(function($stateProvider,
                 $urlRouterProvider){

  $stateProvider
    .state('detail', {
      url: '/movie',
      templateUrl:'partials/movie.html',
      controller: 'MovieCtrl'
    })
    .state('list',{
      url: '/list',
      templateUrl:'partials/search.html',
      controller: "SearchMovieCtrl"
    })
    .state('pret', {
      url: '/pret',
      templateUrl: 'partials/pret.html',
      controller: 'PretCtrl'
    })
    .state('edit-note', {
      url: '/notes/:note_id/edit',
      templateUrl: 'partials/edit.html',
      controller: 'NoteCtrl'
    })
    .state('movie', {
      url: '/movie/:movie_id',
      templateUrl: 'partials/movie.html',
      controller: 'MovieCtrl'
      /*,
      views:{
        'sidebar' : {
          templateUrl: "movieSidebar.html",
          controller: "SidebarCtrl"
        }
      }
      */
    })
    .state('search', {
      url: '/search',
      templateUrl : 'partials/search.html',
      controller: 'SearchMovieCtrl',
    })
    ;

  $urlRouterProvider.otherwise("/search");
});
