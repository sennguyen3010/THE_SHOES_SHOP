import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupApi } from '../../redux/reducers/userReducer';
import Notification from '../../components/Notification/Notification';

export default function Register() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const schema = Yup.object({
    email: Yup.string().required('Email không được bỏ trống!').email('Email không đúng định dạng!'),
    password: Yup.string()
      .required('Password không được bỏ trống!')
      .min(3, 'Password từ 3-32 ký tự!')
      .max(32, 'Password từ 3-32 ký tự!'),
    passwordConfirm: Yup.string()
      .required('Password confirm không được bỏ trống!')
      .oneOf([Yup.ref('password')], 'Passwords không khớp!'),
    name: Yup.string().required('Name không được bỏ trống!'),
    phone: Yup.string().required('Phone không được bỏ trống!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    window.scrollTo(0, 0);

    const action = signupApi(data);
    dispatch(action);
  };

  return (
    <section className="register">
      <div className="container">
        <Notification />

        <form className="row register-form" id="registerForm" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="register-title">Register</h2>

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

            <div className="register-item">
              <label className="register-item_label">Password confirm</label>
              <input
                {...register('passwordConfirm')}
                name="passwordConfirm"
                type={showPasswordConfirm ? 'password' : 'text'}
                className="register-item_input"
                id="passwordConfirm"
                placeholder="Password confirm"
              />
              <span className="mess_err">{errors.passwordConfirm?.message}</span>

              <div onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>
                {showPasswordConfirm ? (
                  <i id="password-icon" className="far fa-eye"></i>
                ) : (
                  <i id="password-icon" className="fas fa-eye-slash"></i>
                )}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 pd-left">
            <div className="register-item">
              <label className="register-item_label">Name</label>
              <input {...register('name')} name="name" className="register-item_input" id="name" placeholder="Name" />
              <span className="mess_err">{errors.name?.message}</span>
            </div>

            <div className="register-item">
              <label className="register-item_label">Phone</label>
              <input
                {...register('phone')}
                name="phone"
                className="register-item_input"
                id="phone"
                placeholder="Phone"
              />
              <span className="mess_err">{errors.phone?.message}</span>
            </div>

            <fieldset name="gender" className="register-gender" id="gender">
              <p>Gender</p>
              <p>
                <input {...register('gender')} type="radio" id="male" value={true} defaultChecked />
                <label htmlFor="male">Male</label>
              </p>
              <p>
                <input {...register('gender')} type="radio" id="female" value={false} />
                <label htmlFor="female">Female</label>
              </p>
            </fieldset>

            <div className="col-12 col-lg-6 register-btnSubmit">
              <button type="submit" className="btnSubmit" id="btnSubmit">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
