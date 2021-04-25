/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
export default class AppController {
  constructor(layout, api) {
    this.layout = layout;
    this.api = api;
  }

  init() {
    this.layout.init();
    this.messagesEl = Array.from(document.querySelectorAll('.message'));
    this.initStream();
  }

  initStream() {
    this.stream$ = this.api.initStream();
    this.subsciption = this.stream$.subscribe((messages) => {
      while (document.querySelector('.message') !== null) {
        document.querySelector('.message').remove();
      }

      for (const message of messages) {
        this.layout.renderMessage(message.from, message.subject, message.received);
      }
    });
  }
}
