import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getProfileApi, signupApi } from '../../redux/reducers/userReducer';
import Cart from '../../components/Cart/Cart';
import { useEffect } from 'react';

export default function Profile() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin } = useSelector((state) => state.userReducer);
  let [userUpdate, setUserUpdate] = useState({
    email: userLogin?.email,
    password: userLogin?.password,
    phone: userLogin?.phone,
    name: userLogin?.name,
    gender: userLogin?.gender,
  });
  // console.log(userLogin);
  // console.log(userUpdate);

  const schema = Yup.object({
    email: Yup.string().required('Email không được bỏ trống!').email('Email không đúng định dạng!'),
    password: Yup.string()
      .required('Password không được bỏ trống!')
      .min(3, 'Password từ 3-32 ký tự!')
      .max(32, 'Password từ 3-32 ký tự!'),

    name: Yup.string().required('Name không được bỏ trống!'),
    phone: Yup.string().required('Phone không được bỏ trống!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const action = signupApi(data);
    dispatch(action);
  };

  useEffect(() => {
    const action = getProfileApi();
    dispatch(action);
  }, []);

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    console.log(value);
    value = userLogin.email;
  };

  return (
    <section className="profile">
      <div className="container">
        <div className="profile-layout">
          <h2 className="productFeature-title mb-0">Profile</h2>

          <form className="row register-form" id="registerForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="profile-avatar col-2">
              <img className="profile-avatar-img" src={userLogin.avatar} alt="avatar" />
            </div>
            <div className="col-12 col-lg-5 pd-right">
              <div className="register-item">
                <label className="register-item_label">Email</label>
                <input
                  value={userLogin.email}
                  onChange={handleChangeInput}
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
            </div>

            <div className="col-12 col-lg-5 pd-left">
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

              <fieldset name="gender" className="profile-gender register-gender" id="gender">
                <p>Gender</p>
                <p>
                  <input {...register('gender')} type="radio" id="male" value={true} defaultChecked />
                  <label htmlFor="male">Male</label>
                </p>
                <p>
                  <input {...register('gender')} type="radio" id="female" value={false} />
                  <label htmlFor="female">Female</label>
                </p>
                <div className="register-btnSubmit">
                  <button type="submit" className="profile-btn btnSubmit" id="btnSubmit">
                    Update
                  </button>
                </div>
              </fieldset>
            </div>
          </form>

          <div className="profile-hr"></div>

          <div className="profile-history d-flex">
            <h3 className="profile-history-title">Order history</h3>
            <h3 className="profile-history-title-black">Favourite</h3>
          </div>
          <p className="profile-placed-title">+ Orders have been placed on 09-19-2022</p>
          <Cart />
        </div>
      </div>
    </section>
  );
}
