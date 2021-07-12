import React from 'react';
import { rest } from 'msw';
import { render, screen, waitFor } from '@testing-library/react'

import { server } from '../../msw/server';
import Weather from '../Weather';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Weather', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render a loading component', () => {
    render(<Weather />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('should render Boston weather', async () => {
    const container = render(<Weather />);

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    })

    expect(container.getByText('Weather forecast:')).toBeInTheDocument();
    expect(container.getByText('Boston, Massachusetss')).toBeInTheDocument();
  });

  test('should render error message', async () => {
    server.use(
      rest.get('https://weather-app-serverless.vercel.app/api', (req, res, ctx) => {
        return res.once(ctx.status(403), ctx.error());
      }),
    );
    const container = render(<Weather />);

    await waitFor(() => {
      expect(container.getByText('We are having problems')).toBeInTheDocument();
    })
  });
});
