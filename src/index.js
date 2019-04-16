import { h, render } from 'preact';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'preact-redux';
import store from './redux/store'

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
