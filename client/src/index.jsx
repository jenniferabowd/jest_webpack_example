import React from 'react';
import ReactDOM from 'react-dom';

// this imports in my React Component
import TeamAmerica from './components/TeamAmerica';

ReactDOM.render(
  <TeamAmerica />,
  document.getElementById('app') || document.createElement('div'),
);
