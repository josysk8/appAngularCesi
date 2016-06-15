angular.module('myapp.services', [])

.factory('Movie', function($http){

  return {
    apiKey: '58f8fe741b03b0ae4c9a2ed080e94041',
    url: "http://api.themoviedb.org/3/",
    get: function(id){
      return $http.get(
        this.url +
        "movie/" +
        id +
        "?api_key=" + this.apiKey);
    },
    search: function() {

    },
    all: function(query){
      var url =  this.url + "search/movie/"+ "?api_key=" + this.apiKey+ "&query="+query;
      return $http.get("proxy.php?url=" + encodeURIComponent(url));

      /*return $http.get(
        this.url +
        "search/movie/"+
        "?api_key=" + this.apiKey+ "&query="+query);*/
    },
  };
})

.factory('Note', function($q, $timeout){

  return {
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    all: function(){
      var defered = $q.defer();
      var that = this;

      $timeout(function(){
        defered.notify('75%');
      }, 1500);

      $timeout(function(){
        defered.notify('100%');
        defered.resolve(that.notes);
        //defered.reject({message: "Connection timeout"});
      }, 2000);

      return defered.promise;
    },
    get: function(id){

      return this.notes[id];
    },
    insert: function(note){
      this.notes.push(note);
      localStorage.setItem('notes', JSON.stringify(this.notes));
      return this.notes.length - 1;
    },
    delete: function(index) {
      this.notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
    clear: function() {
      this.notes = [];
      localStorage.clear();
      return this.notes;
    }

  };
})
;
