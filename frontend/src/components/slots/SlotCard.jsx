import Button from "../common/Button";

export default function SlotCard({ slot, onBook }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
      <b>{slot.examName}</b>
      <p>{slot.date} | {slot.startTime} - {slot.endTime}</p>
      <p>Remaining: {slot.remainingCapacity}</p>

      <Button
        text="Book"
        disabled={slot.remainingCapacity === 0}
        onClick={() => onBook(slot._id)}
      />
    </div>
  );
}
