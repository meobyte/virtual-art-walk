(function () {
  var videoPlayers = document.querySelectorAll(".video__inner"),
      numberOfPlayers = videoPlayers.length,
      i = 0,
      left, top;

  for (; i < numberOfPlayers; i++) {
    videoPlayers[i].style.left = videoPlayers[i].offsetLeft + "px";
    videoPlayers[i].style.top = videoPlayers[i].offsetTop + "px";
    videoPlayers[i].style.width = videoPlayers[i].offsetWidth+ "px";

    videoPlayers[i].addEventListener("click", function(event) {
      this.classList.toggle("playing");
      this.classList.add("fixed");
    });

    videoPlayers[i].addEventListener("transitionend", function(event) {
      if (this.classList.contains("playing")) {
        this.querySelector(".video__overlay").classList.add("show");
      } else {
        this.classList.remove("fixed");
        this.querySelector(".video__overlay").classList.remove("show");
      }
    });
  }
}());
