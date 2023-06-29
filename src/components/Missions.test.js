import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from './Missions';

const mockStore = configureStore([]);

test('renders Missions component', () => {
  const store = mockStore({ mission: { missions: [] } });

  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
});

test('handles join and leave mission', () => {
  const store = mockStore({ mission: { missions: [] } });

  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
});
