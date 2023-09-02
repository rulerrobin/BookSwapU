import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { describe, it, expect } from 'vitest'

describe('App component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  )})
})




