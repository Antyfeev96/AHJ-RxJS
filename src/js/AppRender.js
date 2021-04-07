export default class AppRender {
  constructor() {
    this.body = document.body;
  }

  init() {
    this.container = document.createElement('div');
    this.container.className = 'container';
    this.container.append(this.renderTextarea(), this.renderMessages());
    this.body.append(this.container);
    this.renderMessage();
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
    return this.mailerEl;
  }

  renderMessages() {
    this.messagesEl = document.createElement('div');
    this.messagesEl.className = 'messages';
    this.incomingEl = document.createElement('p');
    this.incomingEl.className = 'messages__incoming';
    this.incomingEl.textContent = 'Incoming';
    this.messagesEl.append(this.incomingEl);
    return this.messagesEl;
  }

  renderMessage() {
    this.messageEl = document.createElement('div');
    this.messageEl.className = 'message';
    this.contactEl = document.createElement('div');
    this.contactEl.className = 'message__contact';
    this.contactEl.textContent = 'dima@mishka';
    this.textEl = document.createElement('div');
    this.textEl.className = 'message__text';
    this.textEl.textContent = 'Hello from Mishka';
    this.timestampEl = document.createElement('div');
    this.timestampEl.className = 'message__timestamp';
    this.timestampEl.textContent = '23:38 07.04.2021';
    this.messageEl.append(this.contactEl, this.textEl, this.timestampEl);
    this.messagesEl.append(this.messageEl);
  }
}
