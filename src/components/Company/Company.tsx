import { CompanyUI } from "../../shared/types/models/CompanyUI";
import "./_Company.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SelectedTimeSlot } from "../../shared/types";
import { companiesSelector } from "../../store";
import { SelectedSlot } from "../SelectedSlot/SelectedSlot";
import { Day } from "../Day";

interface CompanyProps {
  company: CompanyUI;
}

export const Company = ({ company }: CompanyProps) => {
  const { id, name, days } = company;
  const { selectedTimeSlots } = useSelector(companiesSelector);
  const [timeSlotForCompany, setTimeSlotForCompany] = useState<
    SelectedTimeSlot | undefined
  >();

  const removeTimeSlotForCompany = () => setTimeSlotForCompany(undefined);

  useEffect(() => {
    if (selectedTimeSlots.length > 0) {
      const timeSlot = selectedTimeSlots.find((slot) => slot.companyId === id);
      setTimeSlotForCompany(timeSlot);
    } else {
      removeTimeSlotForCompany();
    }
  }, [selectedTimeSlots, id]);

  return (
    <div className="company col-4" data-testid="Company">
      <div className="company__header sticky-top">
        <div className="company__name ">{name}</div>
        {timeSlotForCompany ? (
          <SelectedSlot selectedTimeSlot={timeSlotForCompany} />
        ) : null}
      </div>
      <div className="day-list">
        {days.map((day, index) => (
          <Day key={`company-${id}_${index}`} daySlot={day} companyId={id} />
        ))}
      </div>
    </div>
  );
};
