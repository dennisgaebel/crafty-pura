import Flickity from "flickity";
import "flickity-imagesloaded";

export default class Carousel {
  constructor() {
    // this.trigger = document.querySelector("[data-trigger]");
    // this.events();

    this.slider = document.querySelector("[data-carousel]");
    const $counter = $(".gallery-counter")[0];

    this.flickity = new Flickity(this.slider, {
      adaptiveHeight: true,
      wrapAround: true,
      imagesLoaded: true,
      lazyLoad: 1
    });

    this.$flkty = Flickity.data(this.slider);

    const markup = `${this.$flkty.selectedIndex + 1} of ${
      this.$flkty.cells.length
    }`;

    $counter.innerHTML += markup;

    this.$flkty.on("change", function() {
      $counter.innerHTML = `${this.selectedIndex + 1} of ${this.cells.length}`;
    });
  }

  // events() {
  //   this.trigger.addEventListener("click", this.myFunction.bind(this));
  // }
  // myFunction() {}
}
