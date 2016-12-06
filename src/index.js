import React from 'react';
import Start from './component/start';
import {render} from 'react-dom';
import './main.css';
import './containers/settings.css';
import './shuffling.css';
import './swiper.min.css';
import './login.css';
import "./recommend.css"
import Routes from './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
render(<Start />,document.getElementById('root'));
