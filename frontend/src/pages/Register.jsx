import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import { registerUser } from "../services/authService";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleRegister = async () => {
    await registerUser(email, password, role);
    alert("Registered successfully");
    navigate("/");
  };

  return (
    <div className="page">
      <h2>Register</h2>
      <RegisterForm
        email={email}
        password={password}
        role={role}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onRoleChange={(e) => setRole(e.target.value)}
        onSubmit={handleRegister}
      />
    </div>
  );
}
