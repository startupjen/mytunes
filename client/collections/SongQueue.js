// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }

    });
    this.on('ended', function() {
      this.shift();
      if (this.length >= 1) {
        this.playFirst();
      }   
  
    });
    this.on('dequeue', function() {
      this.shift();
    }); 
  },
  dequeue: function() {
    this.shift();
  },
  enqueue: function(song) {
    // this.add(song);
    this.push(song);
    // this.trigger('add', this);
  },
  playFirst: function() {
    console.log(this.at(0));
    this.at(0).play();
  },



});