export default class AppController {
  constructor(layout) {
    this.layout = layout;
  }

  init() {
    this.layout.init();
  }
}
