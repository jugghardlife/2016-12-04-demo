import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';


import Routes from './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<Routes />,document.getElementById('root'));
