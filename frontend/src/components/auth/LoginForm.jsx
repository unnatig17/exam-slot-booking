import Input from "../common/Input";
import Button from "../common/Button";
import ErrorText from "../common/ErrorText";

export default function LoginForm({
  email,
  password,
  error,
  onEmailChange,
  onPasswordChange,
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
      <ErrorText message={error} />
      <Button text="Login" onClick={onSubmit} />
    </div>
  );
}
