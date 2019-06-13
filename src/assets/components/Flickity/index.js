import Flickity from "flickity";
import "flickity-imagesloaded";

export default class Carousel {
  constructor() {
    this.slider = document.querySelector("[data-carousel]");
    const $counter = $(".carousel-counter")[0];

    this.flickity = new Flickity(this.slider, {
      adaptiveHeight: true,
      wrapAround: true,
      imagesLoaded: true,
      pageDots: false,
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
}
