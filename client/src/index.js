import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
