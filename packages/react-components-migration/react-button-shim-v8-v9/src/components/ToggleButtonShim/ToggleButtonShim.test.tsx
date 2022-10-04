import * as React from 'react';
import { render } from '@testing-library/react';
import { ToggleButtonShim } from './ToggleButtonShim';

describe('ToggleButtonShim', () => {
  // TODO add more tests here, and create visual regression tests in /apps/vr-tests

  it('renders a default state', () => {
    const result = render(<ToggleButtonShim>Default ToggleButtonShim</ToggleButtonShim>);
    expect(result.container).toMatchSnapshot();
  });
});
