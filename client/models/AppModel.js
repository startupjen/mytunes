// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    console.log(JSON.stringify('params: ' + params));
    params.library.on('play', function(song) {
      if (this.get('songQueue').length === 0) {
        this.set('currentSong', song);
      }
      
    }, this);

    params.library.on('enqueue', function(song) {
      // console.log('appmodel song: ', song);
      let appSongQueue = this.get('songQueue');
      appSongQueue.enqueue(song);
    }, this);

    // params.library.on('dequeue', function(song) {
    //   let appSongQueue = this.get('songQueue');
    //   appSongQueue.dequeue();
    // }, this);

    // params.library.listenTo(this.get('songQueue'), 'dequeue', function(song) {
    //   console.log('appmodel song dequeue: ', song);
    //   let appSongQueue = this.get('songQueue');
    //   appSongQueue.dequeue();
    // });
  }

});
