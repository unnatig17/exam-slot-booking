import Input from "../common/Input";
import Button from "../common/Button";
import ErrorText from "../common/ErrorText";

export default function RegisterForm({
  email,
  password,
  role,
  error,
  loading,
  onEmailChange,
  onPasswordChange,
  onRoleChange,
  onSubmit
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <Input 
        label="Email Address" 
        type="email"
        value={email} 
        onChange={onEmailChange}
        onKeyPress={handleKeyPress}
        placeholder="you@school.edu"
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        onKeyPress={handleKeyPress}
        placeholder="••••••••"
      />

      <div className="input-group">
        <label>Account Type</label>
        <select value={role} onChange={onRoleChange}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <ErrorText message={error} />
      <Button 
        text={loading ? "Creating Account..." : "Create Account"} 
        onClick={onSubmit}
        disabled={loading}
        variant="primary"
      />
    </form>
  );
}
