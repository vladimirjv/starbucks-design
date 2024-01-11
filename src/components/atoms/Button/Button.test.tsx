import { render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render properly', () => {
    const component = render(<Button todo="" />);
    expect(component).toBeTruthy();
    // TODO: Add tests and or change this one
  });
});
