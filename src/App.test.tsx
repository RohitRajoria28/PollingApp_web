import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HomeScreen from './Components/HomeScreen';
import DetailScreen from './Components/DetailScreen';

describe('App', () => {
  it('renders HomeScreen component when the path is /', () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    );
    const homeScreenElement = screen.getByTestId('home-screen');
    expect(homeScreenElement).toBeInTheDocument();
  });

  it('renders DetailScreen component when the path is /DetailScreen', () => {
    render(
      <Router>
        <Routes>
          <Route path="/DetailScreen" element={<DetailScreen />} />
        </Routes>
      </Router>
    );
    const detailScreenElement = screen.getByTestId('detail-screen');
    expect(detailScreenElement).toBeInTheDocument();
  });
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
