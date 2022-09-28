import React, { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { signinApi, signinApiFacebook } from '../../redux/reducers/userReducer';

export default function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const schema = Yup.object({
    email: Yup.string().required('Email không được bỏ trống!').email('Email không đúng định dạng!'),
    password: Yup.string()
      .required('Password không được bỏ trống!')
      .min(3, 'Password từ 3-32 ký tự!')
      .max(32, 'Password từ 3-32 ký tự!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    const action = signinApi(data);
    dispatch(action);
  };

  const responseFacebook = (response) => {
    console.log(response);

    const action = signinApiFacebook(response.accessToken);
    dispatch(action);
  };

  return (
    <section className="register">
      <div className="container">
        <form className="row register-form" id="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="register-title">Login</h2>

          <div className="col-12 col-lg-6 pd-right">
            <div className="register-item">
              <label className="register-item_label">Email</label>
              <input
                {...register('email')}
                name="email"
                className="register-item_input"
                id="email"
                placeholder="Email"
              />
              <span className="mess_err">{errors.email?.message}</span>
            </div>

            <div className="register-item">
              <label className="register-item_label">Password</label>
              <input
                {...register('password')}
                name="password"
                type={showPassword ? 'password' : 'text'}
                className="register-item_input"
                id="password"
                placeholder="Password"
              />
              <span className="mess_err">{errors.password?.message}</span>

              <div onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <i id="password-icon" className="far fa-eye"></i>
                ) : (
                  <i id="password-icon" className="fas fa-eye-slash"></i>
                )}
              </div>
            </div>
            <div className="col-12 col-lg-12 text-end register-btnSubmit">
              <NavLink className="register-link" to="/register">
                Register now ?
              </NavLink>
              <button type="submit" className="btnSubmit" id="btnLogin">
                LOGIN
              </button>
            </div>

            <div className="col-12 col-lg-12 text-end register-btnSubmit">
              <FacebookLogin
                appId="620622206275461"
                autoLoad
                callback={responseFacebook}
                render={(renderProps) => (
                  <button type="button" onClick={renderProps.onClick} className="login-fb">
                    <i className="fab fa-facebook login-fb-icon"></i>
                    Continue with Facebook
                  </button>
                )}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
