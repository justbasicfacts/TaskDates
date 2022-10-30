import { cleanup, RenderResult, screen } from "@testing-library/react";
import { mockSelectedSlot } from "../../mocks/component-data/selectedSlot";
import {
  getFormattedTime,
  getReadableDay,
  initialMockState,
} from "../../utils";
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

  //   test("can render values correctly", async () => {
  //     renderDay();

  //     const dayHeader = screen.getByText("Monday, December 12th, 2022");
  //     expect(dayHeader).toHaveClass("day__header");
  //   });

  //   test("can render time slots", async () => {
  //     renderDay();

  //     //check if correct number of slots rendered
  //     const slots = screen.getAllByTestId("Slot");
  //     expect(slots.length).toEqual(3);

  //     //check if slots rendered correctly
  //     expect(screen.getByText("08:00 - 09:30")).toBeInTheDocument();
  //     expect(screen.getByText("08:30 - 10:00")).toBeInTheDocument();
  //     expect(screen.getByText("09:00 - 10:30")).toBeInTheDocument();

  //   });
});
