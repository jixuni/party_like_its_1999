$(document).ready(function () {

    var songArray = [
        "Baby One More Time",
        "I Want It That Way",
        "Wannabe",
        "Fantasy",
        "No Scrubs",
        "Bills, Bills, Bills",
        "I Believe I Can Fly",
        "Livin' 'la Vida Loca",
        "Turn the Beat Around",
        "All Star",
        "Just A Girl",
        "Smooth",
        "Save Tonight",
        "Fly Away",
        "I Don't Want To Miss A Thing",
        "Hard Knock Life",
        "Me Against the World",
        "Hypnotize",
        "Crossroads",
        "Amazed",
    ]

    // working on adding all artist
    var artistArray = [
        "Britney Spears",
        "Backstreet Boys",
        "Spice Girls",
        ""
    ]

// working on DRY CODE 
        // var queryURL = "https://orion.apiseeds.com/api/music/lyric/" + lyricArray + "apikey=97klSgiv5iiHy19EgaFdvZbAFytE7q8pmJcgcoTHMQXlsP0xfpI1FS0neTSg4Ea3";
        // for (var i = 0; i < lyricArray.length; i++);

//Britney Spear, "Baby One More Time"
        $.ajax({
            url: "https://orion.apiseeds.com/api/music/lyric/britney%20spears/baby%20one%20more%20time?apikey=97klSgiv5iiHy19EgaFdvZbAFytE7q8pmJcgcoTHMQXlsP0xfpI1FS0neTSg4Ea3",
            method: "GET"
          }).then(function(result) {
            var lyrics = result.result.track.text;
            var short = lyrics.substr(50, 200);
            console.log(short);
          });
      
          
});