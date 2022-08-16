import React, { useState } from "react"
import 'Components/Authentication/lib/style.css'
import axios from 'Components/lib/axios'
import {useNavigate} from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState()
  const submit = async (form) => {
    form.preventDefault();
    const email = form.target.email.value
    const username = form.target.username.value
    const phone_number = form.target.phone_number.value
    const password = form.target.password.value

    const {status, data} = await axios.post('/register', {
      email,
      username,
      phone_number,
      password,
    })

    if (status === 201 && data.username){
      navigate('/login')
    }else{
      setServerError(data.error)
    }
    return
  }

  return (
      <div className="Auth-form-container">
        <form onSubmit={submit} className="Auth-form">
          {serverError && <div className="error">{serverError}</div>}
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                required
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>username</label>
              <input
                required
                name="username"
                type="username"
                className="form-control mt-1"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone number</label>
              <input
                required
                name="phone_number"
                type="phone number"
                className="form-control mt-1"
                placeholder="Enter phone number"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                required
                name="password"
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

export default Registration