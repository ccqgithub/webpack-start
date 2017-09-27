import ReactDOM from 'react-dom';
import React from 'react';
import utils from '../lib/utils';
import _ from 'lodash';
import { AppContainer } from 'react-hot-loader';
import TestPage from '../rc/Test';

require('../less/test.less');

ReactDOM.render(
  <AppContainer>
    <TestPage></TestPage>
  </AppContainer>
  ,
  document.getElementById('app')
);

// Hot Module Replacement API
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('../rc/Test', () => {
      let TestPage = require('../rc/Test').default;
      ReactDOM.render(
        <AppContainer>
          <TestPage></TestPage>
        </AppContainer>
        ,
        document.getElementById('app')
      )
    });
  }
}
