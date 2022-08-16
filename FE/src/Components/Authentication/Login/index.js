import React from 'react'
import 'Components/Authentication/lib/style.css'
import axios from 'Components/lib/axios'
import {useNavigate} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

    const submit = async (form) => {
      form.preventDefault();
      const email = form.target.email.value
      const password = form.target.password.value

      const {status, data: { refreshToken, accessToken, id, username, email: userEmail }} = await axios.post('/auth/login', {
        email,
        password,
      })
      
      if (status === 201 && refreshToken) {
        sessionStorage.setItem("refreshToken", refreshToken);
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("user_id", id);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("email", userEmail);
        navigate('/home')
      }
      return
    }

    return (
        <div className="Auth-form-container">
          <form onSubmit={submit} className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  name='email'
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  name='password'
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )
}

export default Login