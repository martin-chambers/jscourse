import React from 'react';
import ReactDOM from 'react-dom';
import CcyPairPanel from './components/ccyPairPanel';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <CcyPairPanel/>, document.getElementById('ticker')
);

