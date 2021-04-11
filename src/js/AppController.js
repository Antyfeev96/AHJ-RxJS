/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
export default class AppController {
  constructor(layout, api) {
    this.layout = layout;
    this.api = api;
  }

  async init() {
    this.layout.init();
    this.messagesEl = document.querySelector('.messages');
    this.initStream();
  }

  async initStream() {
    setInterval(async () => {
      while (this.messagesEl.lastChild && this.messagesEl.lastChild.nodeName === 'DIV') {
        this.messagesEl.lastChild.remove();
      }
      this.messages = await this.takeResponse();
      for (const message of this.messages) {
        this.layout.renderMessage(message.from, message.subject, message.received);
      }
    }, 3000);
  }

  async takeResponse() {
    this.response = await this.api.initStream();
    console.log(this.response); // значение записалось со второго раза
    if (this.response) {
      return this.response; // значение ушло
    }
  }
}
