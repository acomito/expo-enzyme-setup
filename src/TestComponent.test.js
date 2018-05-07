import React from 'react';
import { shallow } from 'enzyme';
import { TestComponent } from './TestComponent.js';



let DEFAULT_PROPS = { };



describe('<TestComponent />', () => {
  const app = shallow(<TestComponent {...DEFAULT_PROPS} />);
 
  it('<TestComponent /> should render', () => {
    expect(app.exists()).toBe(true);
  });

});