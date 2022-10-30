import {
  cleanup,
  fireEvent,
  RenderResult,
  screen,
  waitFor,
} from "@testing-library/react";
import { mockSlot } from "../../mocks/component-data/slot";
import { getFormattedTime, initialMockState } from "../../utils";
import { renderWithProviders } from "../../utils/renderWithProviders";
import { Slot } from "./Slot";

const renderSelectedSlot = (): RenderResult =>
  renderWithProviders(<Slot {...mockSlot} />);

describe("<Slot/>", () => {
  afterEach(cleanup);

  test("can render Slot component correctly", async () => {
    renderSelectedSlot();
    const slotComponent = screen.getByTestId("Slot");
    expect(slotComponent).toBeInTheDocument();

    expect(
      screen.getByText(
        getFormattedTime(mockSlot.startTime) +
          " - " +
          getFormattedTime(mockSlot.endTime)
      )
    ).toBeInTheDocument();
  });

  test("it should have selected class when selected", async () => {
    renderSelectedSlot();
    const slotComponent = screen.getByTestId("Slot");
    fireEvent.click(slotComponent);

    expect(slotComponent).toHaveClass("selected");
  });

  test("if it is pressed again while it is selected, it should undo the selection", async () => {
    renderSelectedSlot();
    const slotComponent = screen.getByTestId("Slot");
    fireEvent.click(slotComponent);

    expect(slotComponent).toHaveClass("selected");

    fireEvent.click(slotComponent);
    expect(slotComponent).not.toHaveClass("selected");
  });
});
