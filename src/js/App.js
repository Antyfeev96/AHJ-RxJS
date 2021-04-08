import AppController from './AppController';
import AppRender from './AppRender';

const app = new AppController(new AppRender());
app.init();
