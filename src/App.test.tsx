import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe("App Route Testing", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    //console.log(wrapper.debug());
  });
  
  test('Defines main applicatin route', () => {
    expect(wrapper.find('[path="/"]').text()).toBeDefined();
  });

  test('Defines sub page route', () => {
    expect(wrapper.find('[path="/originalGrids"]').text()).toBeDefined();
  });
});
