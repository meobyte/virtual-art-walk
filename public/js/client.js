(function () {
  var videoPlayers = document.querySelectorAll(".video__inner"),
      numberOfPlayers = videoPlayers.length,
      i = 0,
      thisVideoPlayer;

  for (; i < numberOfPlayers; i++) {
    thisVideoPlayer = videoPlayers[i];

    // When enough info about the size has come in, set the container coordinates and width
    thisVideoPlayer.querySelector(".video__player").addEventListener("loadeddata", function(event) {
      var videoParent = this.parentNode;
      var videoParentPosition = videoParent.getBoundingClientRect();
      videoParent.style.left = videoParentPosition.left  + "px";
      videoParent.style.top = videoParentPosition.top  + "px";
      videoParent.style.width = videoParent.offsetWidth + "px";
    });

    // When a video is clicked toggle fullscreen
    thisVideoPlayer.addEventListener("click", function(event) {
      this.classList.toggle("playing");
      this.classList.add("fixed");
      if (this.classList.contains("playing")) {
        this.querySelector("h1").classList.remove("show");
        this.querySelector("h1").classList.add("hide");
      } else {
        this.querySelector(".video__overlay").classList.add("hide");
      }
    });

    // Toggle the overlay
    thisVideoPlayer.addEventListener("transitionend", function(event) {
      var overlay = this.querySelector(".video__overlay");

      if (this.classList.contains("playing")) {
        overlay.classList.add("show");
        this.querySelector(".video__player").play();
      } else {
        this.classList.remove("fixed");
        overlay.classList.remove("show");
        overlay.classList.remove("hide");
        this.querySelector("h1").classList.add("show");
        this.querySelector("h1").classList.remove("hide");
      }
    });
  }
}());
