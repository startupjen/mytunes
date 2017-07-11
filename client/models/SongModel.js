// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  ended: function() {
    this.trigger('ended', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  enqueue: function() {
    console.log('SongModel enqueue: ' + JSON.stringify(this));
    this.trigger('enqueue', this);
  }

});
