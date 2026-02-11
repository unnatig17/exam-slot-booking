import Input from "../common/Input";
import Button from "../common/Button";
import ErrorText from "../common/ErrorText";

export default function LoginForm({
  email,
  password,
  error,
  loading,
  onEmailChange,
  onPasswordChange,
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
        placeholder="admin@test.com"
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        onKeyPress={handleKeyPress}
        placeholder="••••••••"
      />
      <ErrorText message={error} />
      <Button 
        text={loading ? "Logging in..." : "Log In"} 
        onClick={onSubmit}
        disabled={loading}
        variant="primary"
      />
    </form>
  );
}
