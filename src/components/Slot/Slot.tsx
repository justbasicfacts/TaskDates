import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TimeSlotUI } from "../../shared/types/models/TimeSlotUI";
import { companiesSelector } from "../../store/companiesSelector";
import { companiesSlice } from "../../store/companiesSlice";
import { AppDispatch } from "../../store/store";
import { checkDateOverlap } from "../../utils/checkDateOverlap";
import { getFormattedDate } from "../../utils/getFormattedDate";
import { getFormattedTime } from "../../utils/getFormattedTime";
import "./_Slot.scss";

interface SlotProps extends TimeSlotUI {
  companyId: number;
}

export const Slot = ({
  companyId,
  startTime,
  endTime,
}: SlotProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedTimeSlots } = useSelector(companiesSelector);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleSlotClick = () => {
    const payload = {
      companyId,
      startTime,
      endTime,
      day: getFormattedDate(startTime),
    };

    if (!isDisabled) {
      dispatch(companiesSlice.actions.selectTimeSlot(payload));
    }

    if (isSelected) {
      dispatch(companiesSlice.actions.removeTimeSlot(payload));
    }
  };

  useEffect(() => {
    const isDisabled = selectedTimeSlots.findIndex((item) =>
      checkDateOverlap({
        selectedTimeSlot: item,
        currentTimeSlot: { startTime, endTime },
      })
    );
    const isSelected = selectedTimeSlots.find(
      (item) =>
        item.companyId === companyId &&
        item.startTime === startTime &&
        item.endTime === endTime
    )
      ? true
      : false;

    if (!isSelected) setIsDisabled(isDisabled > -1);
    setIsSelected(isSelected);
  }, [selectedTimeSlots, companyId, startTime, endTime]);

  return (
    <div
      className={classNames("slot", {
        selected: isSelected,
        disabled: isDisabled,
      })}
      onClick={handleSlotClick}
      title={isSelected ? "Click to unselect" : undefined}
      data-testid="Slot"
    >
      <span className="slot__time">
        {getFormattedTime(startTime)}
        {" - "}
        {getFormattedTime(endTime)}
      </span>
    </div>
  );
};
