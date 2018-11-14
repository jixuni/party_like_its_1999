//code from youtube iframe player api tutoril
  var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


        var player;
            function onYouTubeIframeAPIReady() {
              player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: 'p47fEXGabaY',
                events: {
                  'onReady': onPlayerReady,

                }
              });
            }

      function stopVideo() {
        player.stopVideo();
      }

            function onPlayerReady(event) {
      event.target.playVideo();
    }
