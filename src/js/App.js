import API from './API';
import AppController from './AppController';
import AppRender from './AppRender';

const app = new AppController(new AppRender(), new API());
app.init();
app.sendRequest('getMessages');
// setInterval(() => console.log(app.response), 5000);
