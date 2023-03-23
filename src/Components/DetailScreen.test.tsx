import React from 'react';
import { useLocation } from 'react-router-dom';
import { render } from '@testing-library/react';

import DetailsScreen from './DetailScreen';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
}));

describe('DetailsScreen', () => {
  it('renders the JSON data', () => {
    const json = { name: 'John Doe', age: 30 };
    (useLocation as jest.Mock).mockReturnValue({ state: { json } });
    const { getByText } = render(<DetailsScreen />);
    const jsonString = JSON.stringify(json, null, 2);
    expect(getByText(jsonString)).toBeInTheDocument();
  });
});
