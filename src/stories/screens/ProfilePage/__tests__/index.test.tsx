import * as React from 'react';
import 'react-native';
import ProfilePage from '../index';
// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

const navigation = { state: jest.fn() };

it('renders correctly', () => {
  const tree = renderer.create(<ProfilePage navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
