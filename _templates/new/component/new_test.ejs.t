---
to: src/components/<%= atomicType %>/<%= name %>/<%= name %>.test.tsx
unless_exists: true
---
import { render } from '@testing-library/react';
import <%= Name %> from './<%= name %>';

describe('<%= Name %> component', () => {
  it('should render properly', () => {
    const component = render(<<%= Name %> todo="" />);
    expect(component).toBeTruthy();
    // TODO: Add tests and or change this one
  });
});
