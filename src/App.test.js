// Este es el archivo de prueba que usa testing library
// Importamos las dependencias necesarias
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Escribimos una prueba que verifica que el componente se renderiza correctamente
test("renderiza el componente Counter", () => {
  // Usamos el método render para montar el componente en el DOM virtual
  render(<App />);
  // Usamos el método screen para acceder al DOM
  // Usamos el método getByText para buscar el elemento que tiene el texto 'El valor actual es 0'
  const counterElement = screen.getByText(/El valor actual es 0/i);
  // Esperamos que el elemento exista
  expect(counterElement).toBeInTheDocument();
});

// Escribimos otra prueba que verifica que el botón incrementa el valor
test("incrementa el valor al hacer clic en el botón", () => {
  // Usamos el método render para montar el componente en el DOM virtual
  render(<App />);
  // Usamos el método screen para acceder al DOM
  // Usamos el método getByText para buscar el elemento que tiene el texto 'Incrementar'
  const buttonElement = screen.getByText(/Incrementar/i);
  // Simulamos un clic en el botón usando el método fireEvent
  fireEvent.click(buttonElement);
  // Usamos el método getByText para buscar el elemento que tiene el texto 'El valor actual es 1'
  const counterElement = screen.getByText(/El valor actual es 1/i);
  // Esperamos que el elemento exista
  expect(counterElement).toBeInTheDocument();
});

test("Encontrar un boton dentro del DOM", ()=>{
  render (<App/>)

  const input = screen.getByText(/El valor actual es/i);
  expect(input).toBeInTheDocument();
})