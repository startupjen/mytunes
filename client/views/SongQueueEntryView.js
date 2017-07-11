// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  events: {
    'click': function() {
      // this.model.play();
      this.model.dequeue();
    }
  }
  // this.listensTo(0)

});
