import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NotFoundScreen from '../components/NotFoundScreen';
/* const mockNavigate = jest.fn() */;


/* jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
})); */

describe('NotFoundScreen', () => {
  test('renders NotFoundScreen with icon, title, and message', () => {
    render(
      <BrowserRouter>
        <NotFoundScreen />
      </BrowserRouter>
    );
    expect(screen.getByText('Página No Encontrada')).toBeInTheDocument();
    expect(
      screen.getByText('Lo sentimos, la página que buscas no existe.')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /volver al inicio/i })
    ).toBeInTheDocument();
  });


});
