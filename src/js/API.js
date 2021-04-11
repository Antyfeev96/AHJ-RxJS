/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

export default class API {
  async initStream() {
    this.stream$ = ajax.getJSON('https://ahj-rxjs-backend.herokuapp.com/messages/unread');
    from(this.stream$).pipe(
      map((value) => value.messages),
    ).subscribe((value) => {
      this.response = value;
    });
    console.log(this.response); // значение записалось со второй
    return this.response; // значение ушло
  }
}
