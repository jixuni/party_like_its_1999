

var apiKey = "5464ca2cbd521f1a5f5f69cb8b0d199d"
var queryObject = {
    artist1:{
        name: "britney spears",
        song: "baby one more time"
    },
    artist2:{
        name: "backstreet boys",
        song: "I want it that way",
    },
    artist3:{
        name: "spice girls",
        song: "wannabe",
    },
    artist4:{
        name: "mariah carey",
        song: "fantasy",
    },
}
13799336
var keyCount = Object.keys(queryObject)

function lyricApi() {
    //https://api.musixmatch.com/ws/1.1/track.search?q_artist=tupac&q_track=world&
    //queryUrl = "http://api.musixmatch.com/ws/1.1/track.search?q_artist=" + queryObject.artist1.name + "&apikey="+apiKey;
    
    $.ajax({
        type: "GET",
        data: {
            apikey:"5464ca2cbd521f1a5f5f69cb8b0d199d",
            //q_track:"back to december",
            q_artist: queryObject.artist2.name,
            //f_has_lyrics: 1,
            format:"jsonp",
            callback:"jsonp_callback"
        },
        url: "http://api.musixmatch.com/ws/1.1/track.search?",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function(data) {
            console.log(data); 
        },
    
    })
}
lyricApi();