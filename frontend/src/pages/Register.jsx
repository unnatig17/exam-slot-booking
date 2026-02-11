import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import { register } from "../services/authService";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await register(email, password, role);
      alert("Registered successfully! Redirecting to login...");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)" }}>
      <div className="page">
        <div style={{ marginBottom: "24px", textAlign: "center" }}>
          <div style={{
            width: "56px",
            height: "56px",
            background: "var(--color-primary)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "24px",
            margin: "0 auto 16px"
          }}>
            📅
          </div>
          <h2 style={{ marginBottom: "8px" }}>Create Account</h2>
          <p className="subtitle">Join MarkMySpot to book your exam slots</p>
        </div>

        <RegisterForm
          email={email}
          password={password}
          role={role}
          error={error}
          loading={loading}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onRoleChange={(e) => setRole(e.target.value)}
          onSubmit={handleRegister}
        />

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
            Already have an account?{" "}
            <Link 
              to="/"
              style={{
                color: "var(--color-primary)",
                textDecoration: "none",
                fontWeight: "600",
                transition: "opacity 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.opacity = "0.8"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
