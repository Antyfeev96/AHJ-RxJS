/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
export default class AppController {
  constructor(layout, api) {
    this.layout = layout;
    this.api = api;
  }

  async init() {
    this.layout.init();
    this.messagesEl = Array.from(document.querySelectorAll('.message'));
    await this.initStream();
  }

  async initStream() {
    this.subscription$ = await this.api.initStream().then((stream) => {
      stream.subscribe(async (messages) => {
        while (document.querySelector('.message') !== null) {
          document.querySelector('.message').remove();
        }
        for (const message of messages) {
          this.layout.renderMessage(message.from, message.subject, message.received);
        }
        // if (stream) {
        //   console.log(stream);
        //   await stream.unsubscribe(); не работает, приложение не падает, ошибка unsubscribe is not a function
        // }
      });
    });
    // this.subscription$ = await this.api.initStream();
    // this.subscription$.subscribe((messages) => {
    //   while (document.querySelector('.message') !== null) {
    //     document.querySelector('.message').remove();
    //   }

    //   for (const message of messages) {
    //     this.layout.renderMessage(message.from, message.subject, message.received);
    //   }
    // });
    // if (this.subscription$) {
    //   this.subscription$.unsubscribe();
    //   не работает, приложение падает, unsubscribe is not a function;
    // }
  }
}
