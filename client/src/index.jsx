import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// this imports in my React Component
import TeamAmerica from './components/TeamAmerica';

// Redux Store
import PlanTeam from './reducers/reducer_plan_team';

const configureStoreWithMiddleware = configureStore({ reducer: { planTeam: PlanTeam } });

ReactDOM.render(
  <Provider store={configureStoreWithMiddleware}>
    <TeamAmerica />
  </Provider>
  , document.getElementById('app') || document.createElement('div'),
);
