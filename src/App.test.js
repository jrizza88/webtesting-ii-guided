import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jest-dom/extend-expect';
// import { render, getByDisplayValue } from 'react-testing-library';
import { render, fireEvent } from 'react-testing-library';

describe('The App Component', () => {



xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// no explicit logic necessary, render takes 
// care of the logic you see above
it('renders without crashing', () => {
  render(<App />);
});

it('displays hello Jamar',() => {
// in these tests we need to render the app..
  const { getByText } = render(<App />);
  getByText(/Hello Jamar/i)
  // console.log("useful methods", usefulMethods);
});

xit('displays hello world',() => {
  // in these tests we need to render the app..
    const { queryByText } = render(<App />);
    const text = queryByText(/Hello World/i)
    // queryByText does not fail automatically
   expect(text).toBeIneTheDocument();
  });

it('displays greeting when greet button is click', () => {
// render the page
const { getByText } = render(<App />);
//find the button
const button = getByText(/greet/i);

// click the button
fireEvent.click(button);
// find the greeting
getByText(/hello web students/i);
// the above would fail if fireEvent isn't called first
});


});