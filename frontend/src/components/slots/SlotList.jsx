import SlotCard from "./SlotCard";

export default function SlotList({ slots, onBook }) {
  if (slots.length === 0) return <p>No slots available</p>;

  return (
    <div>
      {slots.map(slot => (
        <SlotCard key={slot._id} slot={slot} onBook={onBook} />
      ))}
    </div>
  );
}
