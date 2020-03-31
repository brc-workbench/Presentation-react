import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe("App Route Testing", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    //console.log(wrapper.debug());
  });
  
  test('Verify main applicatin route', () => {
    expect(wrapper.find('[path="/"]').text()).toBeDefined();
  });

  test('Verify /originalGrids page route', () => {
    expect(wrapper.find('[path="/originalGrids"]').text()).toBeDefined();
  });

  test('Verify /uploadSchedule page route', () => {
    expect(wrapper.find('[path="/uploadSchedule"]').text()).toBeDefined();
  });

  test('Verify /gridDemo page route', () => {
    expect(wrapper.find('[path="/gridDemo"]').text()).toBeDefined();
  });
});
