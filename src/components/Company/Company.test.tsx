import {
  screen,
  RenderResult,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { mockCompany } from "../../mocks/component-data/company";
import { renderWithProviders } from "../../utils/renderWithProviders";
import { Company } from "./Company";

const renderCompany = (): RenderResult =>
  renderWithProviders(<Company company={mockCompany} />);

describe("<Company/>", () => {
  test("can render time slots correctly", async () => {
    renderCompany();
    await screen.findAllByTestId("Day");

    //Check if it can render correct number of Days
    const dayComponents = screen.getAllByTestId("Day");
    expect(dayComponents.length).toBe(2);

    //Check if it can render date as readable
    const dayComponentHeader = screen.getAllByText(
      "Monday, December 12th, 2022"
    )[0];
    expect(dayComponentHeader).toBeInTheDocument();

    //Check if it can render times correctly
    const slotTime = screen.getAllByText("09:00 - 10:30")[0];
    expect(slotTime).toBeInTheDocument();
  });

  test("can render time slot if slot is selected", async () => {
    renderCompany();
    await screen.findAllByTestId("Slot");
    const slotComponents = screen.getAllByTestId("Slot");

    fireEvent.click(slotComponents[0]);

    await waitFor(() => {
      const selectedSlotComponent = screen.getAllByTestId("SelectedSlot")[0];

      expect(selectedSlotComponent).toBeInTheDocument();
    });
  });
});
