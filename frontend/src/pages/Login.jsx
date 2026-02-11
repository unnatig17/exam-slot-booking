import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { loginUser } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await loginUser(email, password);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      navigate(res.data.role === "admin" ? "/admin" : "/student");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <LoginForm
        email={email}
        password={password}
        error={error}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleLogin}
      />
    </div>
  );
}
