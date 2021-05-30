import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const express = require("express");
// const app = express();

// app.listen(5000, function () {
//     console.log('server running on http://localhost:5000');
// })

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();