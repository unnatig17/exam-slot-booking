import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { login } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await login(email, password);
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);
      localStorage.setItem("userName", res.email?.split("@")[0] || "User");

      navigate(res.role === "admin" ? "/admin" : "/student");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
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
          <h2 style={{ marginBottom: "8px" }}>Sign In</h2>
          <p className="subtitle">Enter your credentials to access MarkMySpot</p>
        </div>

        <LoginForm
          email={email}
          password={password}
          error={error}
          loading={loading}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleLogin}
        />

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "8px" }}>
            Don't have an account?{" "}
            <Link 
              to="/register"
              style={{
                color: "var(--color-primary)",
                textDecoration: "none",
                fontWeight: "600",
                transition: "opacity 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.opacity = "0.8"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              Register here
            </Link>
          </p>
        </div>

        <div style={{
          marginTop: "24px",
          paddingTop: "20px",
          borderTop: "1px solid var(--color-border)",
          fontSize: "12px",
          color: "var(--color-text-secondary)"
        }}>
          <p style={{ marginBottom: "8px", fontWeight: "600", color: "var(--color-text-tertiary)" }}>Demo Credentials:</p>
          <p style={{ marginBottom: "4px" }}>Admin: <code style={{ background: "var(--color-bg-tertiary)", padding: "2px 6px", borderRadius: "4px" }}>admin@test.com</code> / <code style={{ background: "var(--color-bg-tertiary)", padding: "2px 6px", borderRadius: "4px" }}>123456</code></p>
          <p>Student: <code style={{ background: "var(--color-bg-tertiary)", padding: "2px 6px", borderRadius: "4px" }}>student1@test.com</code> / <code style={{ background: "var(--color-bg-tertiary)", padding: "2px 6px", borderRadius: "4px" }}>123456</code></p>
        </div>
      </div>
    </div>
  );
}
