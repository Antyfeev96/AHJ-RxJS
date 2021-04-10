import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export default class API {
  async initStream() {
    this.stream$ = ajax.getJSON('http://localhost:7070/messages/unread');
    const response = from(this.stream$).subscribe((value) => console.log(value));
    return response;
  }
}
