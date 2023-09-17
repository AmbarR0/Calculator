import '@testing-library/jest-dom'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LabelInput from '../../Components/Label';
import Calculator from '../../Components/Calculator';



test('render label', () => {
    render(<LabelInput text="1234" sw = {1}/>);
    const elemento = screen.getByText("1234")
    expect(elemento).toBeTruthy();
});





test('Suma 22 y 3', () => {
  render(<Calculator />);

  const button2 = screen.getByText('2');
  fireEvent.click(button2);
  fireEvent.click(button2);

  const buttonPlus = screen.getByText('+');
  fireEvent.click(buttonPlus);

  const button3 = screen.getByText('3');
  fireEvent.click(button3);

  const buttonEqual = screen.getByText('=');
  fireEvent.click(buttonEqual);

  const labelElement = screen.getByText('25');

  expect(labelElement).toBeInTheDocument();
});

test('Restar 2.4 y 3', () => {
  render(<Calculator />);

  const button2 = screen.getByText('2');
  fireEvent.click(button2);

  const buttondot = screen.getByText('.');
  const button4 = screen.getByText('4');

  fireEvent.click(buttondot);
  fireEvent.click(button4);

  const buttonMinus = screen.getByText('-');
  fireEvent.click(buttonMinus);

  const button3 = screen.getByText('3');
  fireEvent.click(button3);

  const buttonEqual = screen.getByText('=');
  fireEvent.click(buttonEqual);

  const labelElement = screen.queryByText((content, element) => {
    return content.includes('-0.6');
  });

  expect(labelElement).toBeInTheDocument();
});


test('Restar -2.4 y 3', () => {
  render(<Calculator />);

  const button2 = screen.getByText('2');
  const buttonMinus = screen.getByText('-');
  const buttondot = screen.getByText('.');
  const button4 = screen.getByText('4');

  fireEvent.click(buttonMinus);
  fireEvent.click(button2);
  fireEvent.click(buttondot);
  fireEvent.click(button4);
  fireEvent.click(buttonMinus);

  const button3 = screen.getByText('3');
  fireEvent.click(button3);

  const buttonEqual = screen.getByText('=');
  fireEvent.click(buttonEqual);

  const labelElement = screen.queryByText((content, element) => {
    return content.includes('-5.4');
  });

  expect(labelElement).toBeInTheDocument();
});