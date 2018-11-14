$(document).ready(function () {

    //Initializing the SDK
    window.onSpotifyWebPlaybackSDKReady = () => {
        const token = 'BQAIkFs_x8h7ePnwRxUgn0RfexRqpPti4CwQJL93ufCDGSVPqgGUk6Bf0QJv16Swea2HNWJM1gKvvrHLb7CMwB-KrZYzc0N5bvKM7NY-CWV9Ta6KXaQFfYW-RAQ4RfAP3Qj68_NSaEohs9zARuIPpZrpUvhS5-W1AFn0a6HAQhivsuz0Sj3TOihJ';
        const player = new Spotify.Player({
            name: 'Web Playback SDK Quick Start Player',
            getOAuthToken: cb => { cb(token); }
        });

        // Error handling
        player.addListener('initialization_error', ({ message }) => { console.error(message); });
        player.addListener('authentication_error', ({ message }) => { console.error(message); });
        player.addListener('account_error', ({ message }) => { console.error(message); });
        player.addListener('playback_error', ({ message }) => { console.error(message); });

        // Playback status updates
        player.addListener('player_state_changed', state => { console.log(state); });

        // Ready
        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
        });

        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });


        // Connect to the player!
        player.connect();
    };

    var spotifySongs = [
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

    function getSong() {
        var queryURL = "https://api.spotify.com/v1/search" + spotifySongs + ""
        for (var i = 0; i < spotifySongs.length; i++);

        $.ajax ({
            url: "https://api.spotify.com/v1/search",
            method: "GET", 
        }).then(function(response) {
            console.log(response);
        })

    }

getsong()


});