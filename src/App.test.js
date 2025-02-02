// src\App.test.js
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

describe('App', () => {
	it('renders without crashing', async () => {
		const div = document.createElement('div');

		ReactDOM.createRoot(div).render(<App />);

	});

	it('Flight Schedule heading should be there', () => {

		render(<App />)
		const text = screen.getByTestId(/heading/i)
		expect(text).toHaveTextContent('Flight Schedule')
		expect(text).toBeInTheDocument()
	})
});