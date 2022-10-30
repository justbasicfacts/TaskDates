import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/renderWithProviders";
import App from "./App";

test("fetches & receives a user after clicking the fetch user button", async () => {
  renderWithProviders(<App />);

  expect(await screen.findByText(/Loading.../i)).toBeInTheDocument();

  //wait until loading
  const companyComponents = await screen.findAllByTestId("Company");
  expect(companyComponents.length).toEqual(3);

  const firstTimeSlot = await screen.findAllByText("08:00 - 09:30");

  fireEvent.click(firstTimeSlot[0]);

  const selectedTimeSlot = await screen.findByTestId("SelectedSlot");

  expect(selectedTimeSlot).toBeInTheDocument();

  const clearReservationButton = await screen.findByText("Clear Reservation");
  expect(clearReservationButton).toBeInTheDocument();

  fireEvent.click(clearReservationButton);
  expect(clearReservationButton).not.toBeInTheDocument();
});
