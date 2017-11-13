import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import toJson from 'enzyme-to-json';
import filepathToTitle from 'filepath-to-title';

configure({ adapter: new Adapter() });

export default ({ Component, title: describeTitle, useCases, dirpath }) => {
  const dirpathTitle = dirpath && filepathToTitle(dirpath);
  const localDescribeTitle =
    describeTitle || dirpathTitle || shallow(<Component />).name();

  describe(localDescribeTitle, () => {
    useCases.forEach(({ title, props }) => {
      const shallowWrapper = shallow(<Component {...props} />);
      console.log(shallowWrapper.name());
      it(title, () => expect(toJson(shallowWrapper)).toMatchSnapshot());
    });
  });
};
