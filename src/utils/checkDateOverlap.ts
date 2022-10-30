import { isEqual } from "date-fns";
import { TimeSlotUI } from "../shared/types/modals/TimeSlotUI";
import { isRangeBetween } from "./isRangeBetween";

interface CheckDateOverlapProps {
  currentTimeSlot: TimeSlotUI;
  selectedTimeSlot: TimeSlotUI;
}

export const checkDateOverlap = ({
  currentTimeSlot,
  selectedTimeSlot,
}: CheckDateOverlapProps) => {
  const currentStartTime = new Date(currentTimeSlot.startTime);
  const currentEndTime = new Date(currentTimeSlot.endTime);
  const selectedStartTime = new Date(selectedTimeSlot.startTime);
  const selectedEndTime = new Date(selectedTimeSlot.endTime);

  return (
    isRangeBetween(selectedStartTime, currentStartTime, currentEndTime) ||
    isRangeBetween(selectedEndTime, currentStartTime, currentEndTime) ||
    (isEqual(currentStartTime, selectedStartTime) &&
      isEqual(currentEndTime, selectedEndTime))
  );
};
