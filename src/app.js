var videoContainer = document.getElementsByClassName("video-compare-container");
var videoClipper = document.getElementsByClassName("video-clipper");
var clippedVideo = document.getElementsByClassName("clipped-video");
var divider = document.getElementsByClassName("divider");

function trackLocation(e) {
    for (var i = 0; i < videoClipper.length; i++) {
        var rect = videoContainer[i].getBoundingClientRect();
        var position = ((e.pageX - rect.left) / videoContainer[i].offsetWidth) * 100;
        if (position <= 100) {
            videoClipper[i].style.width = position + "%";
            clippedVideo[i].style.width = ((100 / position) * 100) + "%";
            divider[i].style.left = position + "%";
            // clippedVideo[i].style.zIndex = 3;
        }
    }
}

for (var i = 0; i < videoContainer.length; i++) {
    videoContainer[i].addEventListener("mousemove", trackLocation, false);
    videoContainer[i].addEventListener("touchstart", trackLocation, false);
    videoContainer[i].addEventListener("touchmove", trackLocation, false);
}


console.log(videoContainer);