import "./loginForm.css";
import { useLoginForm } from "./useLoginForm";

const LoginForm = ({ message }: { message: string }) => {
  const { handleLogin, handleChange, errorMessages } = useLoginForm(message);

  return (
    <form className="login-form" autoComplete="off" onSubmit={handleLogin}>
      <h2 className="header-title">Login</h2>
      <div>
        <div className="error">{errorMessages}</div>
        <div className="row">
          <label>Email</label>
          <input
            autoComplete="off"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <label>Password</label>
          <input
            autoComplete="new-password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
        <div className="button row">
          <button type="submit">Log In</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
