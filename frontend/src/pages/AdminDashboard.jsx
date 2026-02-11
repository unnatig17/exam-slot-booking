import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("slots");
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Admin";

  // Sample admin data (replace with API calls)
  const slots = [
    {
      _id: "s1",
      examName: "Advanced Mathematics",
      date: "2024-06-15",
      startTime: "09:00",
      endTime: "11:00",
      totalCapacity: 30,
      bookedCount: 30,
      status: "ACTIVE"
    },
    {
      _id: "s2",
      examName: "Advanced Mathematics",
      date: "2024-06-15",
      startTime: "13:00",
      endTime: "15:00",
      totalCapacity: 30,
      bookedCount: 30,
      status: "ACTIVE"
    },
    {
      _id: "s3",
      examName: "Quantum Physics",
      date: "2024-06-16",
      startTime: "10:00",
      endTime: "13:00",
      totalCapacity: 20,
      bookedCount: 20,
      status: "ACTIVE"
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleEdit = (slotId) => {
    alert(`Edit slot: ${slotId}`);
  };

  const handleDelete = (slotId) => {
    if (window.confirm("Are you sure you want to delete this slot?")) {
      alert(`Deleted slot: ${slotId}`);
    }
  };

  const handleCreateSlot = () => {
    alert("Open create slot modal");
  };

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
              className={`navbar-tab ${activeTab === "slots" ? "active" : ""}`}
              onClick={() => setActiveTab("slots")}
            >
              Slots
            </button>
            <button 
              className={`navbar-tab ${activeTab === "bookings" ? "active" : ""}`}
              onClick={() => setActiveTab("bookings")}
            >
              Bookings
            </button>
            <button 
              className={`navbar-tab ${activeTab === "audit" ? "active" : ""}`}
              onClick={() => setActiveTab("audit")}
            >
              Audit
            </button>
          </div>
          <div className="navbar-user">
            <div className="navbar-user-info">
              <div className="navbar-user-name">{userName}</div>
              <div className="navbar-user-role">Admin</div>
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

      {/* Admin Container */}
      <div className="admin-container">
        <div className="dashboard">
          <div className="dashboard-header">
            <div>
              <h2 className="dashboard-title">Admin Control Center</h2>
              <p className="dashboard-subtitle">Manage slots, track bookings, and review audit trails.</p>
            </div>
            {activeTab === "slots" && (
              <button className="btn-create" onClick={handleCreateSlot}>
                <span>+</span>
                Create Exam Slot
              </button>
            )}
          </div>

          {/* Slots Tab */}
          {activeTab === "slots" && (
            <div className="admin-table-card">
              <div className="table-header">
                <h4 style={{ margin: 0 }}>Exam Slots</h4>
              </div>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>EXAM NAME</th>
                      <th>DATE & TIME</th>
                      <th>CAPACITY</th>
                      <th>STATUS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slots.map((slot) => (
                      <tr key={slot._id}>
                        <td>
                          <div className="exam-name-cell">{slot.examName}</div>
                          <div className="exam-id-cell">{slot._id}</div>
                        </td>
                        <td>
                          <div>{slot.date}</div>
                          <div className="text-muted">{slot.startTime} - {slot.endTime}</div>
                        </td>
                        <td>
                          <div className="capacity-bar">
                            <div 
                              className="capacity-fill"
                              style={{ 
                                width: `${(slot.bookedCount / slot.totalCapacity) * 100}%`
                              }}
                            ></div>
                          </div>
                          <div className="capacity-text">
                            {slot.bookedCount}/{slot.totalCapacity}
                          </div>
                        </td>
                        <td>
                          <span className={`status-badge status-${slot.status.toLowerCase()}`}>
                            {slot.status}
                          </span>
                        </td>
                        <td>
                          <div className="table-actions">
                            <button 
                              className="action-btn action-btn-edit"
                              onClick={() => handleEdit(slot._id)}
                            >
                              Edit
                            </button>
                            <button 
                              className="action-btn action-btn-delete"
                              onClick={() => handleDelete(slot._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Bookings Tab */}
          {activeTab === "bookings" && (
            <div className="admin-table-card">
              <div className="table-header">
                <h4 style={{ margin: 0 }}>Student Bookings</h4>
              </div>
              <div className="empty-state">
                <div className="empty-state-icon">📊</div>
                <h3 className="empty-state-title">Bookings Overview Coming Soon</h3>
                <p className="empty-state-text">Track all student exam bookings and enrollment details.</p>
              </div>
            </div>
          )}

          {/* Audit Tab */}
          {activeTab === "audit" && (
            <div className="admin-table-card">
              <div className="table-header">
                <h4 style={{ margin: 0 }}>Audit Log</h4>
              </div>
              <div className="empty-state">
                <div className="empty-state-icon">🔍</div>
                <h3 className="empty-state-title">Audit Trail Coming Soon</h3>
                <p className="empty-state-text">Monitor all system activities and user actions.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
