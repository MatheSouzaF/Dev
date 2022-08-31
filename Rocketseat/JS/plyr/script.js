<video
id="my-player"
class="video-js"
controls
preload="auto"
poster="//vjs.zencdn.net/v/oceans.png"
data-setup='{}'>
<source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
<source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
<source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
<p class="vjs-no-js">
To view this video please enable JavaScript, and consider upgrading to a
web browser that
<a href="https://videojs.com/html5-video-support/" target="_blank">
  supports HTML5 video
</a>
</p>
</video>


var player = videojs('my-player');
var options = {};

var player = videojs('my-player', options, function onPlayerReady() {
  videojs.log('Your player is ready!');

  // In this context, `this` is the player that was created by Video.js.
  this.play();

  // How about an event listener?
  this.on('ended', function() {
    videojs.log('Awww...over so soon?!');
  });
});

<script>
window.HELP_IMPROVE_VIDEOJS = false;
</script>