import React from "react";

export default function Banner() {
  // window.addEventListener("load", videoScroll);
  // window.addEventListener("scroll", videoScroll);
  // const videoScroll = () => {
  //   if (document.querySelectorAll("video[autoplay]").length > 0) {
  //     var windowHeight = window.innerHeight,
  //       videoEl = document.querySelectorAll("video[autoplay]");

  //     for (var i = 0; i < videoEl.length; i++) {
  //       var thisVideoEl = videoEl[i],
  //         videoHeight = thisVideoEl.clientHeight,
  //         videoClientRect = thisVideoEl.getBoundingClientRect().top;

  //       if (
  //         videoClientRect <= windowHeight - videoHeight * 0.5 &&
  //         videoClientRect >= 0 - videoHeight * 0.5
  //       ) {
  //         thisVideoEl.play();
  //       } else {
  //         thisVideoEl.pause();
  //       }
  //     }
  //   }
  // };

  return (
    <div data-videocontrols="none">
      <iframe
        typeof="text/html"
        className="w-full h-screen"
        src="https://www.youtube-nocookie.com/embed/kcSEsljlges?start=53&end=140&autoplay=1&mute=1&controls=0&playsinline=1&enablejsapi=1&rel=0"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
