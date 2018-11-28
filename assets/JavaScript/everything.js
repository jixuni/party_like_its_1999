$(document).ready(function () {

    var music = [
        {
            artistSong: "&artist=backstreet%20boys&track=i%20want%20it%20that%20way",
            lyrics: "backstreet%20boys/i%20want%20it%20that%20way",
        },
        {
            artistSong: "&artist=britney%20spears&track=baby%20one%20more%20time",
            lyrics: "britney%20spears/baby%20one%20more%20time",
        },
        {
            artistSong: "&artist=spice%20girls&track=wannabe",
            lyrics: "spice%20girls/wannabe",
        },
        {
            artistSong: "&artist=mariah%20carey&track=fantasy",
            lyrics: "mariah%20carey/fantasy",
        },
        {
            artistSong: "&artist=tlc&track=no%20scrubs",
            lyrics: "tlc/no%20scrubs",
        },
        {
            artistSong: "&artist=destinys%20child&track=bills%20bills%20bills",
            lyrics: "destiny's%20child/bills,%20bills,%20bills",
        },
        {
            artistSong: "&artist=ace%20of%20base&track=the%20sign",
            lyrics: "ace%20of%20base/the%20sign",
        },
        {
            artistSong: "&artist=ricky%20martin&track=livin'%20la%20vida%20loca",
            lyrics: "ricky%20martin/livin'%20la%20vida%20loca",
        },
        {
            artistSong: "&artist=gloria%20estefan&track=turn%20the%20beat%20around",
            lyrics: "gloria%20estefan/turn%20the%20beat%20around",
        },
        {
            artistSong: "&artist=smash%20mouth&track=all%20star",
            lyrics: "smash%20mouth/all%20star",
        },
        {
            artistSong: "&artist=no%20doubt&track=just%20a%20girl",
            lyrics: "no%20doubt%20/just%20a%20girl",
        },
        {
            artistSong: "&artist=lenny%20kravitz&track=fly%20away",
            lyrics: "lenny%20kravitz/fly%20away",
        },
        {
            artistSong: "&artist=aerosmith&track=i%20don't%20want%20to%20miss%20a%20thing",
            lyrics: "aerosmith/i%20don't%20want%20to%20miss%20a%20thing",
        },
        {
            artistSong: "&artist=next&track=too%20close",
            lyrics: "next/too%20close",
        },
        {
            artistSong: "&artist=lonestar&track=amazed",
            lyrics: "lonestar/amazed",
        },
        {
            artistSong: "&artist=2pac&track=me%20against%20the%20world",
            lyrics: "2pac/me%20against%20the%20world",
        },
        {
            artistSong: "&artist=usher&track=my%20way",
            lyrics: "usher/my%20way",
        },
        {
            artistSong: "&artist=lonestar&track=amazed",
            lyrics: "lonestar/amazed",
        },
        {
            artistSong: "&artist=janet%20jackson&track=together%20again",
            lyrics: "janet%20jackson/together%20again",
        },
        {
            artistSong: "&artist=coolio&track=gangstas%20paradise",
            lyrics: "coolio/gangstas%20paradise",
        },
        {
            artistSong: "&artist=hootie%20and%20the%20blowfish&track=hold%20my%20hand",
            lyrics: "hootie%20and%20the%20blowfish/hold%20my%20hand",
        },

    ]

    var answerURL;

    function fetchData() {
        // Randomly choosing music with lyrics and hints matching
        let randomIndex = Math.floor(Math.random() * music.length);
        let selectedMusic = music[randomIndex];

        // Hint URL
        var apiKey = "534ab8ba3d2f73b71b396ba12659d8b6"
        var artistSongURL = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=" + apiKey + selectedMusic.artistSong + "&format=json";

        // Lyrics URL
        var lyricsURL = "https://orion.apiseeds.com/api/music/lyric/" + selectedMusic.lyrics + "?apikey=97klSgiv5iiHy19EgaFdvZbAFytE7q8pmJcgcoTHMQXlsP0xfpI1FS0neTSg4Ea3";

        console.log("*****HINT: " + artistSongURL)
        console.log("*****SONG:" + lyricsURL)

        $.ajax({
            url: artistSongURL,
            method: "GET"
        }).then(function (response) {

            var modal = document.getElementById('page-modal');

            answerURL = response.track.url;
            console.log(answerURL);

            //Gives Artist Hint and prints to HTML
            $("#life1").click(function () {

                var artistHint = response.track.album.artist;

                modal.style.display = 'block';
                $("#hint").html("artist name is " + "<strong>" + artistHint + "</strong>");
                $("#life1").remove();
            });

            //Gives Genre Hint and prints to HTML
            $("#life2").click(function () {

                var genreHint = response.track.toptags.tag[0].name

                modal.style.display = 'block';
                $("#hint").html("Song genre " + "<strong>" + genreHint + "</strong>");
                $("#life2").remove();
            });

            // Get Album Cover Hint and displays to HTML
            $("#life3").click(function () {

                var albumCover = response.track.album.image[3]["#text"]

                modal.style.display = 'block';
                var x = document.createElement("IMG");
                x.setAttribute("src", albumCover);
                x.setAttribute("alt", "N");
                x.setAttribute("id", "album hint");
                $("#hint").html(x);
                $("#life3").remove();
            });

            // click anywhere in the modal screen to close it.
            window.onclick = function (event) {
                if (event.target.className == "modal-background") {
                    modal.style.display = "none";
                }
            }

        });

        $.ajax({
            url: lyricsURL,
            method: "GET"
        }).then(function (result) {
            console.log(result);
            var lyrics = result.result.track.text;
            var short = lyrics.substr(50, 200);
            songAnswer = result.result.track.name;
            console.log(short);

            var splitted = short.split(" ");
            $("#gameHtmlBody").empty();

            //Loop through each word and set a 700 mil sec delay
            for (i = 0; i < splitted.length; i++) {
                (function (i) {
                    setTimeout(function () {
                        $("#gameHtmlBody").hide().append(splitted[i] + " ").fadeIn("slow");
                    }, 1000 * i);
                })(i);

            };
            lyrics.splice(randomSong, 1);
            console.log(lyrics);
        });
    };

    fetchData();

});