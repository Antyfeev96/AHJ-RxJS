export default class AppRender {
  constructor() {
    this.body = document.body;
  }

  init() {
    this.container = document.createElement('div');
    this.container.className = 'container';
    this.renderTextarea();
    this.container.append(this.mailerEl);
    this.body.append(this.container);
  }

  renderTextarea() {
    this.mailerEl = document.createElement('div');
    this.mailerEl.className = 'mailer';
    this.mailerTitleEl = document.createElement('div');
    this.mailerTitleEl.className = 'mailer__title';
    this.mailerTitleEl.textContent = 'Введите сообщение';
    this.mailerTextareaEl = document.createElement('textarea');
    this.mailerTextareaEl.className = 'mailer__textarea';
    this.mailerTextareaEl.name = 'message';
    this.mailerTextareaEl.placeholder = 'Ваше сообщение...';
    this.mailerEl.append(this.mailerTitleEl, this.mailerTextareaEl);
  }
}
