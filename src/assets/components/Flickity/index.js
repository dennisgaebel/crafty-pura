export default class MyClass {
  constructor() {
    this.trigger = document.querySelector("[data-trigger]");

    this.events();
  }

  events() {
    this.trigger.addEventListener("click", this.myFunction.bind(this));
  }

  myFunction() {}
}
