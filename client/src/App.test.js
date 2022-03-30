import { render, screen } from "@testing-library/react";
import LandingPage from "./pages/LandingPage";
import ActivityForm from "../src/components/ActivityForm";

test("Landing Page contiene un botón con el texto TRAVEL", () => {
  render(<LandingPage />);
  const linkElement = screen.getByText(/Travel!/i);
  expect(linkElement).toBeInTheDocument();
});

test("El formulario debe contener un input con label Name:", () => {
  render(<ActivityForm />);
  screen.getByLabelText(/Name:/i);
});
