import { useEffect, useState } from "react";
import { getSlots, bookSlot } from "../services/slotService";
import SlotList from "../components/slots/SlotList";

export default function StudentDashboard() {
  const [slots, setSlots] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadSlots();
  }, []);

  const loadSlots = async () => {
    try {
      const data = await getSlots();
      console.log("Slots received:", data);
      setSlots(data);
    } catch (err) {
      console.error("Error loading slots:", err);
      setError(err.response?.data?.message || "Failed to load slots");
    }
  };

  const handleBooking = async (slot) => {
    try {
      await bookSlot(slot.examName, slot._id, Date.now().toString());
      alert("Slot booked successfully");
      loadSlots();
    } catch (err) {
      alert("Slot is full or already booked");
    }
  };

  return (
    <div className="page">
      <h2>Available Exam Slots</h2>
      {error && <p className="error">{error}</p>}
      <SlotList slots={slots} onBook={handleBooking} />
    </div>
  );
}
