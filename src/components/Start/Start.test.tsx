/// <reference path="../../typings/globals/jest/index.d.ts" />

import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Start from './index';
import { Provider } from 'react-redux';


import '../../__tests__/mocks';
import mockStore from '../../__tests__/mocks/store';

describe('<Start />', () => {

  it('renders <Welcome /> if checks pass', () => {
    const store = mockStore({
      checks: {
        passed: false
      }
    });
    const tree = renderer.create(
      <Provider store={store}>
        <Start />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // xit('renders <Checks /> if check fails', () => {
  //   const store = mockStore({
  //     checks: {
  //       passed: true
  //     }
  //   });
  //   const tree = renderer.create(
  //     <Provider store={store}>
  //       <Start />
  //     </Provider>
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

});
