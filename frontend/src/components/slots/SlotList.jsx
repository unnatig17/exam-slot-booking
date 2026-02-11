import SlotCard from "./SlotCard";

export default function SlotList({ slots, onBook }) {
  if (!slots || slots.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📭</div>
        <h3 className="empty-state-title">No Slots Available</h3>
        <p className="empty-state-text">Check back later for upcoming exam slots.</p>
      </div>
    );
  }

  return (
    <div className="slots-grid">
      {slots.map((slot) => (
        <SlotCard key={slot._id} slot={slot} onBook={onBook} />
      ))}
    </div>
  );
}
