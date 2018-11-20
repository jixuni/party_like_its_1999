var apiKey = "534ab8ba3d2f73b71b396ba12659d8b6"

//BackStreet Boys, "I Want It That Way"
var queryURL = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=" + apiKey + "&artist=backstreet%20boys&track=i%20want%20it%20that%20way&format=json";
console.log(queryURL)
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    //Gives Artist Hint and prints to HTML
    var artistHint = response.track.album.artist;
    const getArtistHint = document.getElementById("artist hint");
    getArtistHint.textContent = artistHint;
    console.log(artistHint);

    //Gives Genre Hint and prints to HTML
    var genreHint = response.track.toptags.tag[0].name
    const getGenreHint = document.getElementById("genre hint");
    getGenreHint.textContent = genreHint;
    console.log(getGenreHint)

    //Get Album Cover Hint and displays to HTML
    var albumCover = "https://lastfm-img2.akamaized.net/i/u/300x300/cb6112804a3740cf4e53cae8b7a71b97.png";

    var x = document.createElement("IMG");
    x.setAttribute("src", albumCover);
    x.setAttribute("width", "300");
    x.setAttribute("height", "300");
    x.setAttribute("alt", "N");
    x.setAttribute("id", "album hint");

    document.body.appendChild(x);

});

//Britney Spear, "Baby One More Time"
var queryURL = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=" + apiKey + "&artist=brintey%20spears&track=baby%20one%20more%20time&format=json";
console.log(queryURL)
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    //Gives Artist Hint and prints to HTML
    var artistHint = response.track.album.artist;
    const getArtistHint = document.getElementById("artist hint");
    getArtistHint.textContent = artistHint;
    console.log(getArtistHint)

    //Gives Genre Hint and prints to HTML
    var genreHint = response.track.toptags.tag[0].name
    const getGenreHint = document.getElementById("genre hint");
    getGenreHint.textContent = genreHint;
    console.log(getGenreHint)

    //Get Album Cover Hint and displays to HTML
    var albumCover = "https://lastfm-img2.akamaized.net/i/u/300x300/3817dd72fa51d6c216ddcb8195355b21.png";

    var x = document.createElement("IMG");
    x.setAttribute("src", albumCover);
    x.setAttribute("width", "300");
    x.setAttribute("height", "300");
    x.setAttribute("alt", "N");
    x.setAttribute("id", "album hint");
    document.body.appendChild(x);

});

//Spice Girls, "Wannabe"
var queryURL = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=" + apiKey + "&artist=spice%20girls&track=wannabe&format=json";
console.log(queryURL)
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    //Gives Artist Hint and prints to HTML
    var artistHint = response.track.album.artist;
    const getArtistHint = document.getElementById("artist hint");
    getArtistHint.textContent = artistHint;
    console.log(getArtistHint)

    //Gives Genre Hint and prints to HTML
    var genreHint = response.track.toptags.tag[0].name
    const getGenreHint = document.getElementById("genre hint");
    getGenreHint.textContent = genreHint;
    console.log(getGenreHint)

    //Get Album Cover Hint and displays to HTML
    var albumCover = "https://lastfm-img2.akamaized.net/i/u/300x300/822b4129465f4f31ada4f306279d747c.png";

    var x = document.createElement("IMG");
    x.setAttribute("src", albumCover);
    x.setAttribute("width", "300");
    x.setAttribute("height", "300");
    x.setAttribute("alt", "N");
    x.setAttribute("id", "album hint");
    document.body.appendChild(x);

});

//2Pac, "Me Against The World"
var queryURL = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=" + apiKey + "&artist=2pac&track=me%20against%20the%20world&format=json";
console.log(queryURL)
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    //Gives Artist Hint and prints to HTML
    var artistHint = response.track.album.artist;
    const getArtistHint = document.getElementById("artist hint");
    getArtistHint.textContent = artistHint;
    console.log(getArtistHint)

    //Gives Genre Hint and prints to HTML
    var genreHint = response.track.toptags.tag[0].name
    const getGenreHint = document.getElementById("genre hint");
    getGenreHint.textContent = genreHint;
    console.log(getGenreHint)

    //Get Album Cover Hint and displays to HTML
    var albumCover = "https://lastfm-img2.akamaized.net/i/u/300x300/4ca8269cfa0a4e0bb9a08aedfb645ed6.png";

    var x = document.createElement("IMG");
    x.setAttribute("src", albumCover);
    x.setAttribute("width", "300");
    x.setAttribute("height", "300");
    x.setAttribute("alt", "N");
    x.setAttribute("id", "album hint");
    document.body.appendChild(x);

});

//Lenny Kravitz, "Fly Away"
var queryURL = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=" + apiKey + "&artist=lenny%20kravitz&track=fly%20away&format=json";
console.log(queryURL)
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    //Gives Artist Hint and prints to HTML
    var artistHint = response.track.album.artist;
    const getArtistHint = document.getElementById("artist hint");
    getArtistHint.textContent = artistHint;
    console.log(getArtistHint)

    //Gives Genre Hint and prints to HTML
    var genreHint = response.track.toptags.tag[0].name
    const getGenreHint = document.getElementById("genre hint");
    getGenreHint.textContent = genreHint;
    console.log(getGenreHint)

    //Get Album Cover Hint and displays to HTML
    var albumCover = "https://lastfm-img2.akamaized.net/i/u/300x300/84e708c86f0b4847a8e80e0e13494944.png";

    var x = document.createElement("IMG");
    x.setAttribute("src", albumCover);
    x.setAttribute("width", "300");
    x.setAttribute("height", "300");
    x.setAttribute("alt", "N");
    x.setAttribute("id", "album hint");
    document.body.appendChild(x);

});

//Gloria Estefan, "Turn The Beat Around"
var queryURL = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=" + apiKey + "&artist=gloria%20estefan&track=turn%20the%20beat%20around&format=json";
console.log(queryURL)
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    //Gives Artist Hint and prints to HTML
    var artistHint = response.track.album.artist;
    const getArtistHint = document.getElementById("artist hint");
    getArtistHint.textContent = artistHint;
    console.log(getArtistHint)

    //Gives Genre Hint and prints to HTML
    var genreHint = response.track.toptags.tag[0].name
    const getGenreHint = document.getElementById("genre hint");
    getGenreHint.textContent = genreHint;
    console.log(getGenreHint)

    //Get Album Cover Hint and displays to HTML
    var albumCover = "https://lastfm-img2.akamaized.net/i/u/300x300/ab134d5d2e394f9ca557f4701829be2b.png";

    var x = document.createElement("IMG");
    x.setAttribute("src", albumCover);
    x.setAttribute("width", "300");
    x.setAttribute("height", "300");
    x.setAttribute("alt", "N");
    x.setAttribute("id", "album hint");
    document.body.appendChild(x);

});


//Gives Artist Hint and prints to HTML through text
// var artistHint = response.track.album.artist;
// var getArtistHint = document.createElement("h1");
// var b = document.createTextNode(artistHint);
// getArtistHint.appendChild(b);
// document.body.appendChild(getArtistHint); 
