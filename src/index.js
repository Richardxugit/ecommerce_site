import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Root from './Root';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <App/>
    </Root>,
  </React.StrictMode>,
  document.getElementById('root')
);
