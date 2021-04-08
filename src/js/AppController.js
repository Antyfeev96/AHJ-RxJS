export default class AppController {
  constructor(layout, api) {
    this.layout = layout;
    this.api = api;
  }

  init() {
    this.layout.init();
  }

  async fetch(url) {
    const response = await this.api.fetchJSON(url);
    console.log(await response);
  }
}
