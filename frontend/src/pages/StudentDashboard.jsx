import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSlots, bookSlot } from "../services/slotService";
import SlotList from "../components/slots/SlotList";

export default function StudentDashboard() {
  const [slots, setSlots] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("available");
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Student";

  useEffect(() => {
    loadSlots();
  }, []);

  const loadSlots = async () => {
    try {
      const data = await getSlots();
      setSlots(data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load slots");
    }
  };

  const handleBooking = async (slot) => {
    try {
      await bookSlot(slot.examName, slot._id, Date.now().toString());
      alert("Slot booked successfully!");
      loadSlots();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to book slot");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const filteredSlots = slots.filter((slot) =>
    slot.examName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <div className="navbar-logo-icon">📅</div>
            <span>MarkMySpot</span>
          </div>
          <div className="navbar-tabs">
            <button 
              className={`navbar-tab ${activeTab === "available" ? "active" : ""}`}
              onClick={() => setActiveTab("available")}
            >
              Available Slots
            </button>
            <button 
              className={`navbar-tab ${activeTab === "bookings" ? "active" : ""}`}
              onClick={() => setActiveTab("bookings")}
            >
              My Bookings
            </button>
          </div>
          <div className="navbar-user">
            <div className="navbar-user-info">
              <div className="navbar-user-name">{userName}</div>
              <div className="navbar-user-role">Student</div>
            </div>
            <div className="navbar-avatar">{userName.charAt(0).toUpperCase()}</div>
            <button 
              className="btn-secondary btn-sm"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Student Container */}
      <div className="student-container">
        <div className="dashboard">
          {activeTab === "available" && (
            <>
              <div className="dashboard-header">
                <div>
                  <h2 className="dashboard-title">Available Exam Slots</h2>
                  <p className="dashboard-subtitle">Secure your spot for upcoming examinations.</p>
                </div>
              </div>

              <div className="search-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by exam name or date..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {error && <div className="error">{error}</div>}

              <SlotList slots={filteredSlots} onBook={handleBooking} />
            </>
          )}

          {activeTab === "bookings" && (
            <>
              <div className="dashboard-header">
                <div>
                  <h2 className="dashboard-title">My Booking History</h2>
                  <p className="dashboard-subtitle">View and manage your examination schedule.</p>
                </div>
              </div>

              <div className="empty-state">
                <div className="empty-state-icon">📝</div>
                <h3 className="empty-state-title">You haven't made any bookings yet.</h3>
                <p className="empty-state-text">Book exam slots from the available slots section above.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
