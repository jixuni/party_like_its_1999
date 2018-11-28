// var lyrics = [
//     "backstreet%20boys/i%20want%20it%20that%20way",
//     "britney%20spears/baby%20one%20more%20time",
//     "spice%20girls/wannabe",
//     "mariah%20carey/fantasy",
//     "tlc/no%20scrubs",
//     "destiny's%20child/bills,%20bills,%20bills",
//     "ace%20of%20base/the%20sign",
//     "ricky%20martin/livin'%20la%20vida%20loca",
//     "gloria%20estefan/turn%20the%20beat%20around",
//     "smash%20mouth/all%20star",
//     "no%20doubt%20/just%20a%20girl",
//     "eagle%20eye%20cherry/save%20tonight%20",
//     "lenny%20kravitz/fly%20away",
//     "aerosmith/i%20don't%20want%20to%20miss%20a%20thing",
//     "mark%20morrison/return%20of%20the%20mack",
//     "jay-z/hard%20knock%20life",
//     "lonestar/amazed",
//     "2pac/me%20against%20the%20world",
//     "usher/my%20way",
//     "next/too%20close",
// ];

// var songAnswer;

// function getSong() {

//     let randomSong = Math.floor(Math.random() * lyrics.length);
//     let currentSongInPlay = lyrics[randomSong];

//     // $.ajaxPrefilter(function (options) {
//     //     if (options.crossDomain && jQuery.support.cors) {
//     //         options.url = 'https://cors-anywhere.herokuapp.com/' + queryURL;
//     //     }
//     // });

//     var queryURL = "https://orion.apiseeds.com/api/music/lyric/" + currentSongInPlay + "?apikey=97klSgiv5iiHy19EgaFdvZbAFytE7q8pmJcgcoTHMQXlsP0xfpI1FS0neTSg4Ea3";;
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (result) {
//         console.log(result);
//         var lyrics = result.result.track.text;
//         var short = lyrics.substr(50, 200);
//         songAnswer = result.result.track.name;

//         var splitted = short.split(" ");
//         $("#gameHtmlBody").empty();
//         //Loop through each word and set a 700 mil sec delay
//         for (i = 0; i < splitted.length; i++) {
//             (function (i) {
//                 setTimeout(function () {
//                     $("#gameHtmlBody").append(splitted[i]+ " ").fadeIn("slow");
//                 }, 1000 * i);
//             })(i);



//         };

//     });

//     lyrics.splice(randomSong, 1);
//     console.log(lyrics);

// };


