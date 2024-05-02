import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./../Redux/Actions/UserAction";
function LoginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div
      className="card shadow mx-auto"
      style={{ maxWidth: "380px", marginTop: "100px" }}
    >
      <div className="card-body">
        <h4 className="card-title mb-4 text-center">Sign in</h4>
        <form onSubmit={submitHandler}>
          {error && <div style={{color:"red"}}>{error}</div>}
          {loading && <div>Loading</div>}
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Password"
              type="password"
            //   minLength={8}
              maxLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
