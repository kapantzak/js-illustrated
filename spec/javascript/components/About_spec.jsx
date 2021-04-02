import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import About from 'components/About';

describe('<About />', () => {
  beforeEach(() => {
    render(<About></About>);
  });

  it('Renders correctly', async () => {
    await waitFor(() => {
      expect(screen.queryByText('This is the about page')).toBeTruthy();
    });
  });
});
