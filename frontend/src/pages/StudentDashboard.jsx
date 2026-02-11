import { useEffect, useState } from "react";
import SlotList from "../components/slots/SlotList";
import { getAllSlots } from "../services/slotService";
import { bookSlot } from "../services/bookingService";

export default function StudentDashboard() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    getAllSlots().then(res => setSlots(res.data));
  }, []);

  const handleBook = async (slotId) => {
    await bookSlot(slotId, slotId);
    alert("Booking successful");
    getAllSlots().then(res => setSlots(res.data));
  };

  return (
    <div className="page">
      <h2>Student Dashboard</h2>
      <SlotList slots={slots} onBook={handleBook} />
    </div>
  );
}
