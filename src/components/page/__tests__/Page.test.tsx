import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Page from '../Page';

/// Sample test using @testing-library/react vs Enzyme (both are valid)
test('renders bootstrap starter template page', () => {
  const { getByText } = render(
      <Router>
          <Page title='jestPage' category='testing' />
      </Router>    
    );
  const linkElement = getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
