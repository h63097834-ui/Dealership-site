import { useState, useContext } from "react";
import { AuthProvider } from "./AccessTokenProvider";
import { Link } from "react-router-dom";
import "./css/SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState("");
  const { AccessToken, setAccessToken } = useContext(AuthProvider);

  const getName = (event) => {
    setName(event.target.value);
  };
  const getAge = (event) => {
    setAge(Number(event.target.value));
  };
  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const Submit = async (event) => {
    event.preventDefault();
    try {
      console.log("request sent");
      const request = await fetch("http://localhost:3500/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          password,
        }),
      });

      if (!request.ok) {
        setError("Could not Create Account. Please try again later");
        return;
      } else {
        setError("");
        const response = await request.json();
        setData(response.message);
        setAccessToken(response.AccessToken);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="container">
      <form onSubmit={Submit} id="signin-form">
        <h1>Create My Account</h1>
        <label className="label">Enter Name</label>
        <br />
        <input className="input" type="text" required onChange={getName} />
        <br />
        <label className="label">Enter Age</label>
        <br />
        <input
          className="input"
          type="number"
          required
          onChange={getAge}
          min={0}
        />
        <br />
        <label className="label">Enter Password</label>
        <br />
        <input
          className="input"
          type="password"
          required
          onChange={getPassword}
        />
        <br />
        <button id="signup-button">Submit Information</button>
      </form>
      {error.length > 0 && <p id="error">{error}</p>}
      {data.length > 0 && <p id="data">{data}</p>}
      <Link to="/login">
        <p id="signin-link">
          Already have an Account. Click to Login To my Account
        </p>
      </Link>
    </div>
  );
}

export default SignUp;
