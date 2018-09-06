import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
