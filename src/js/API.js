/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import { interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

export default class API {
  async initStream() {
    this.unread$ = ajax.getJSON('https://ahj-rxjs-backend.herokuapp.com/messages/unread');
    return interval(3000).pipe(
      switchMap((intervalValue) => this.unread$),
      map((value) => value.messages),
    );
  }
}
