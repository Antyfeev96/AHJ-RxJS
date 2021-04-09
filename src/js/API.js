import { from } from 'rxjs';

export default class API {
  async initStream() {
    // this.element = element;
    this.apiPromise = await fetch('http://localhost:7070/');
    from(this.apiPromise).subscribe((result) => console.log(result.json()));
    // const result = await this.apiPromise.json();
    // return result;
  }

  async fetchJSON(method) {
    try {
      this.formData = new FormData();
      this.formData.append('method', method);

      const response = await fetch(
        `http://localhost:7070/?method=${this.formData.get('method')}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
