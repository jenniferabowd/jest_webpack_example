import React from 'react';
import renderer from 'react-test-renderer';
import TeamAmerica from '../../client/src/components/TeamAmerica';

// This is the actual test written for Jest
it('test to see if the team renders correctly', () => {
  const tree = renderer.create(<TeamAmerica />).toJSON();
  expect(tree).toMatchSnapshot();
});

