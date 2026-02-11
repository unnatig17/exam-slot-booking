import Button from "../common/Button";

export default function SlotCard({ slot, onBook }) {
  const capacity = slot.totalCapacity || 30;
  const booked = capacity - slot.remainingCapacity;
  const capacityPercent = (booked / capacity) * 100;
  const isFullyBooked = slot.remainingCapacity === 0;

  return (
    <div className="slot-card">
      <div className="slot-header">
        <h4 className="slot-exam-name">{slot.examName}</h4>
        <span className="slot-capacity-badge">
          {slot.remainingCapacity} / {capacity} LEFT
        </span>
      </div>

      <div className="slot-date">
        <span className="slot-icon">📅</span>
        <span>{new Date(slot.date).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</span>
      </div>

      <div className="slot-time">
        <span className="slot-icon">⏰</span>
        <span>{slot.startTime} — {slot.endTime}</span>
      </div>

      <div className="slot-remaining">
        <div className="capacity-bar">
          <div 
            className="capacity-fill" 
            style={{ width: `${capacityPercent}%` }}
          ></div>
        </div>
        <div className="capacity-text">
          <strong>{booked}</strong> booked, <strong>{slot.remainingCapacity}</strong> available
        </div>
      </div>

      <Button
        text={isFullyBooked ? "Fully Booked" : "Book Now"}
        disabled={isFullyBooked}
        onClick={() => onBook(slot)}
        variant="primary"
      />
    </div>
  );
}
