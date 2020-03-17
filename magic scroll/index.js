var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: "onLeave",
    duration: "200%" // this works just fine with duration 0 as well
    // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
    // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
  }
});

// get all slides
var slides = document.querySelectorAll("section.panel");

// create scene for every slide
for (var i = 0; i < slides.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: slides[i]
  })
    .setPin(slides[i], { pushFollowers: false })
    .addTo(controller);
}

new ScrollMagic.Scene({
  triggerElement: slides[2],
  triggerHook: 0.9, // show, when scrolled 10% into view
  duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50 // move trigger to center of element
})
  .setClassToggle("#hat", "visible") // add class to reveal
  .addTo(controller);
