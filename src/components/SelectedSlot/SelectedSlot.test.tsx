import { cleanup, RenderResult, screen } from "@testing-library/react";
import { mockSelectedSlot } from "../../mocks/component-data/selectedSlot";
import { getFormattedTime, getReadableDay } from "../../utils";
import { renderWithProviders } from "../../utils/renderWithProviders";
import { SelectedSlot } from "./SelectedSlot";

const renderSelectedSlot = (): RenderResult =>
  renderWithProviders(<SelectedSlot {...mockSelectedSlot} />);

describe("<SelectedSlot/>", () => {
  afterEach(cleanup);

  test("can render SelectedSlot component correctly", async () => {
    renderSelectedSlot();
    const selectedSlotComponent = screen.getByTestId("SelectedSlot");
    expect(selectedSlotComponent).toBeInTheDocument();
    const readableSelectedDay = getReadableDay(
      mockSelectedSlot.selectedTimeSlot.day
    ) as string;
    //Check if the values are correct
    expect(screen.getByText(readableSelectedDay)).toBeInTheDocument();
    expect(
      screen.getByText(
        getFormattedTime(mockSelectedSlot.selectedTimeSlot.startTime) +
          " - " +
          getFormattedTime(mockSelectedSlot.selectedTimeSlot.endTime)
      )
    ).toBeInTheDocument();
  });
});
