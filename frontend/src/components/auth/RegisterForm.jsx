import Input from "../common/Input";
import Button from "../common/Button";

export default function RegisterForm({
  email,
  password,
  role,
  onEmailChange,
  onPasswordChange,
  onRoleChange,
  onSubmit
}) {
  return (
    <div>
      <Input label="Email" value={email} onChange={onEmailChange} />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />

      <div style={{ marginBottom: "10px" }}>
        <label>Role</label>
        <br />
        <select value={role} onChange={onRoleChange}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <Button text="Register" onClick={onSubmit} />
    </div>
  );
}
