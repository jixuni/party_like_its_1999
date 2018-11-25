$(document).ready(function () {

    var artistSong = [
        "&artist=backstreet%20boys&track=i%20want%20it%20that%20way",
        "&artist=britney%20spears&track=baby%20one%20more%20time",
        "&artist=spice%20girls&track=wannabe",
        "&artist=mariah%20carey&track=fantasy",
        "&artist=tlc&track=no%20scrubs",
        "&artist=destinys%20child&track=bills%20bills%20bills",
        "&artist=ace%20of%20base&track=the%20sign",
        "&artist=ricky%20martin&track=livin'%20la%20vida%20loca",
        "&artist=gloria%20estefan&track=turn%20the%20beat%20around",
        "&artist=smash%20mouth&track=all%20star",
        "&artist=no%20doubt&track=just%20a%20girl",
        "&artist=lenny%20kravitz&track=fly%20away",
        "&artist=aerosmith&track=i%20don't%20want%20to%20miss%20a%20thing",
        "&artist=lonestar&track=amazed",
        "&artist=2pac&track=me%20against%20the%20world",
        "&artist=usher&track=my%20way",
        "&artist=next&track=too%20close",
        "&artist=coolio&track=gangstas%20paradise",
        "&artist=hootie%20and%20the%20blowfish&track=hold%20my%20hand",
        "&artist=janet%20jackson&track=together%20again",
    ]

    function getHint() {
        let randomArtistSong = Math.floor(Math.random() * artistSong.length);
        let currentHint = artistSong[randomArtistSong];

        var apiKey = "534ab8ba3d2f73b71b396ba12659d8b6"
        var queryURL = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key="
            + apiKey + currentHint + "&format=json"

        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            $("#life1").click(function () {
                //Gives Artist Hint and prints to HTML
                var artistHint = response.track.album.artist;
                const getArtistHint = document.getElementById("artist hint");
                getArtistHint.textContent = artistHint;
            });

            $("#life2").click(function () {
                //Gives Genre Hint and prints to HTML
                var genreHint = response.track.toptags.tag[0].name
                const getGenreHint = document.getElementById("genre hint");
                getGenreHint.textContent = genreHint;
            });

            ("#life3").click(function () {
                //Get Album Cover Hint and displays to HTML
                var albumCover = response.track.album.image[3]["#text"]

                var x = document.createElement("IMG");
                x.setAttribute("src", albumCover);
                x.setAttribute("width", "300");
                x.setAttribute("height", "300");
                x.setAttribute("alt", "N");
                x.setAttribute("id", "album hint");
                document.body.appendChild(x);
            });

        });

    };

    getHint()

});

//Gives Artist Hint and prints to HTML through text
// var artistHint = response.track.album.artist;
// var getArtistHint = document.createElement("h1");
// var b = document.createTextNode(artistHint);
// getArtistHint.appendChild(b);
// document.body.appendChild(getArtistHint); 


// figure out how to match current song in play to current hint
// get buttons to work and print hint on screen 

// mathrandom = [3] how do you get [3] from second array?