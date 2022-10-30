import { RenderResult, screen } from "@testing-library/react";
import { mockDay } from "../../mocks/component-data/day";
import { renderWithProviders } from "../../utils/renderWithProviders";
import { Day } from "./Day";

const renderDay = (): RenderResult => renderWithProviders(<Day {...mockDay} />);

describe("<Day/>", () => {
  test("can render day component correctly", async () => {
    renderDay();
    const dayComponent = screen.getByTestId("Day");
    expect(dayComponent).toBeInTheDocument();
  });

  test("can render values correctly", async () => {
    renderDay();

    const dayHeader = screen.getByText("Monday, December 12th, 2022");
    expect(dayHeader).toHaveClass("day__header");
  });

  test("can render time slots", async () => {
    renderDay();

    //check if correct number of slots rendered
    const slots = screen.getAllByTestId("Slot");
    expect(slots.length).toEqual(3);

    //check if slots rendered correctly
    expect(screen.getByText("08:00 - 09:30")).toBeInTheDocument();
    expect(screen.getByText("08:30 - 10:00")).toBeInTheDocument();
    expect(screen.getByText("09:00 - 10:30")).toBeInTheDocument();
  });
});
