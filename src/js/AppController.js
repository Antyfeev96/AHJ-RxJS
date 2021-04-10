export default class AppController {
  constructor(layout, api) {
    this.layout = layout;
    this.api = api;
  }

  init() {
    this.layout.init();
    this.messagesEl = document.querySelector('.messages');
    this.response = this.api.initStream(); // перенести в отдельный метод
  }

  async sendRequest(method) {
    this.response = await this.api.fetchJSON(method);
    while (this.messagesEl.lastChild && this.messagesEl.lastChild.nodeName === 'DIV') {
      this.messagesEl.lastChild.remove();
    }
    for (const message of this.response.messages) {
      this.layout.renderMessage(message.from, message.subject, message.received);
    }
  }
}
