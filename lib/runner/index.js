import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

export default ({ Component, title: describeTitle, useCases }) => {
  describe(describeTitle, () => {
    useCases.forEach(({ title, props }) => {
      const shallowComponent = shallow(<Component {...props} />);
      it(title, () => expect(toJson(shallowComponent)).toMatchSnapshot());
    });
  });
};
