import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const actionLoginWithZustand = useAuthStore(
    (state) => state.actionLoginWithZustand,
  );

  const [from, setFrom] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFrom({
      ...from,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await actionLoginWithZustand(from);

    if (result.success) {
      alert("Login Success!");
      navigate("/dashboard");
    } else {
      alert(result.error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
