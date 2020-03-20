import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Page from '../Page';

test('renders bootstrap starter template page', () => {
  const { getByText } = render(
      <Router>
          <Page title='jestPage' category='testing' />
      </Router>    
    );
  const linkElement = getByText(/Bootstrap starter template/i);
  expect(linkElement).toBeInTheDocument();
});
