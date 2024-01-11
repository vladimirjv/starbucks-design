import { render } from '@testing-library/react';
import Typography from './Typography';

describe('Typography component', () => {
  it('should render properly', () => {
    const component = render(<Typography todo="" />);
    expect(component).toBeTruthy();
    // TODO: Add tests and or change this one
  });
});
