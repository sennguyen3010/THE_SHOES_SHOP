import React from 'react';

export default function Register() {
  return (
    <section className="register">
      <div className="container">
        <form className="row" id="registerForm">
          <h2 className="register-title">Register</h2>
          <div className="col-12 col-lg-6 register-item pd-right">
            <label>Email</label>
            <input className="register-item_input" id="email" placeholder="Email" />
          </div>
          <div className="col-12 col-lg-6 register-item pd-left">
            <input className="register-item_input" id="name" placeholder="Name" />
          </div>
          <div className="col-12 col-lg-6 register-item pd-right">
            <input className="register-item_input" id="password" placeholder="Password" type="password" />
          </div>
          <div className="col-12 col-lg-6 register-item pd-left">
            <input className="register-item_input" id="phone" placeholder="Phone" />
          </div>
          <div className="col-12 col-lg-6 register-item pd-right">
            <input
              className="register-item_input"
              id="passwordConfirm"
              placeholder="Password Confirm"
              type="password"
            />
          </div>
          <fieldset className="col-12 col-lg-6 pd-left register-gender" id="gender">
            <p>Gender</p>
            <div className="form-check register-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="male"
                defaultValue="true"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check register-check">
              <input className="form-check-input" type="radio" name="gridRadios" id="female" defaultValue="false" />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </fieldset>
          <div className="col-0 col-lg-6 pd-right" />
          <div className="col-12 col-lg-6 pd-left register-btnSubmit">
            <button type="button" className="btnSubmit" id="btnSubmit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
