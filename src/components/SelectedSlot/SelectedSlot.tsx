import { useDispatch } from "react-redux";
import { SelectedTimeSlot } from "../../shared/types";
import { AppDispatch, companiesSlice } from "../../store";
import { getFormattedTime, getReadableDay } from "../../utils";
import "./_SelectedSlot.scss";
interface SelectedSlotProps {
  selectedTimeSlot: SelectedTimeSlot;
}

export const SelectedSlot = ({ selectedTimeSlot }: SelectedSlotProps) => {
  const { day, startTime, endTime } = selectedTimeSlot;
  const dispatch = useDispatch<AppDispatch>();

  const handleClearReservation = () => {
    dispatch(companiesSlice.actions.removeTimeSlot(selectedTimeSlot));
  };

  return (
    <div className="selected-slot" data-testid="SelectedSlot">
      <h6> Selected Date and Time</h6>
      <div>
        <span>{getReadableDay(day)}</span>
      </div>
      <div>
        <span>
          {getFormattedTime(startTime)}
          {" - "}
          {getFormattedTime(endTime)}
        </span>
      </div>
      <div className="mt-2">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handleClearReservation}
        >
          Clear Reservation
        </button>
      </div>
    </div>
  );
};
