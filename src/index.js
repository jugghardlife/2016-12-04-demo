import React from 'react';
import {render} from 'react-dom';
import './main.css';

import "./recommend.css"
import './swiper.min.css';
import Routes from './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<Routes />,document.getElementById('root'));
