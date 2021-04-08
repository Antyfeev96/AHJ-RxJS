export default class API {
  async fetchJSON() {
    try {
      this.formData = new FormData();
      this.formData.append('method', 'addMessage');

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
