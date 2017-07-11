// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'http://parse.la.hackreactor.com/mytunes/classes/songs',

  initialize: function() {
    this.fetch({
      dataFilter: function(data) {
        let rawData = JSON.parse(data).results;
        let filteredData = [];
        for (let i = 0; i < rawData.length; i++) {
          filteredData.push(new SongModel(rawData[i]));
        }
        return JSON.stringify(filteredData);
      }

    });

    console.log('Songs: ', this);
    // this.on('add', function(response) {
      
    //   var song = response;//.pop();
    //   let key;
    //   let counter = 0;  
    //   //console.log(JSON.stringify(song));
    //   // for (key in songs) {
    //   //   key = songs[key];
    //   //   counter++;
    //   // }
    //   // console.log('counter: ' + counter + ' key: ' + key);
    //   // console.log(JSON.stringify(songs['results'] ));
    //   //grab the response.result
    //   //then iterate on each one
    //   //add response.result.element to the collection
    //   // console.log(JSON.stringify(this));
      
    // });
  }

});
