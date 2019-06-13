export default class MatchMedia {
  constructor() {
    const viewportSize = 1140;

    if (matchMedia) {
      /* eslint-disable */
      const mq = window.matchMedia("(min-width:" + viewportSize + "px)");
      /* eslint-enable */
      mq.addListener(this.WidthChange);
      this.widthChange(mq, viewportSize);
    }
  }

  resizeHandler(viewport) {
    window.addEventListener("resize", function() {
      if (window.innerWidth < viewport) {
        // window.location.reload();
        console.log("resized");
      }
    });
  }

  widthChange(mq, viewportSize) {
    if (mq.matches) {
      this.myLogger();
    } else {
      this.resizeHandler(viewportSize);
    }
  }

  myLogger() {
    console.log("fired");
  }
}
