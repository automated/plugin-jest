/* globals describe, it, expect */

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import toJson from 'enzyme-to-json';
import filepathToTitle from 'filepath-to-title';

configure({ adapter: new Adapter() });

export default ({
  config: {
    Component,
    title: describeTitle,
    exampleProps,
    useCases,
    __dirpath: dirpath,
  },
  component,
}) => {
  const ComponentLocal = Component || component.default;
  const dirpathTitle = dirpath && filepathToTitle(dirpath);
  const describeTitleLocal =
    describeTitle || dirpathTitle || shallow(<ComponentLocal />).name();
  describe(describeTitleLocal, () => {
    const useCasesLocal = useCases || [
      {
        props: exampleProps || {},
        title: 'Default',
      },
    ];
    useCasesLocal.forEach(({ title, props }) => {
      const shallowWrapper = shallow(<ComponentLocal {...props} />);
      it(title, () => expect(toJson(shallowWrapper)).toMatchSnapshot());
    });
  });
};
