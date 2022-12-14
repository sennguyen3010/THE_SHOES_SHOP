import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getProfileApi, updateProfile } from '../../redux/reducers/userReducer';
import { useEffect } from 'react';
import moment from 'moment';

export default function Profile() {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.userReducer);

  const schema = Yup.object({
    email: Yup.string().required('Email không được bỏ trống!').email('Email không đúng định dạng!'),

    name: Yup.string().required('Name không được bỏ trống!'),
    phone: Yup.string().required('Phone không được bỏ trống!'),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: '',
  });

  const onSubmit = (data) => {
    const action = updateProfile(data);
    dispatch(action);
  };

  useEffect(() => {
    const action = getProfileApi();
    dispatch(action);
  }, [dispatch]);

  useEffect(() => {
    reset(userLogin);
  }, [reset, userLogin]);

  const renderOrderHistory = () => {
    return userLogin?.ordersHistory?.map((order, index) => {
      return (
        <div key={index}>
          <p className="profile-placed-title">
            + Orders have been placed on {moment(order.date).format('MMMM Do YYYY, h:mm:ss a')}
          </p>
          <table className="table text-center align-middle">
            <thead className="carts-thead">
              <tr>
                <th scope="col">Img</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.orderDetail?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img className="carts-img" src={item.image} alt="..." />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <span className="carts-amount">{item.quantity}</span>
                    </td>
                    <td>{item.quantity * item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    });
  };

  return (
    <section className="profile">
      <div className="container">
        <div className="profile-layout">
          <h2 className="productFeature-title mb-0">Profile</h2>

          <form className="row register-form" id="registerForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="profile-avatar col-6 col-md-2">
              <img className="profile-avatar-img" src={userLogin?.avatar} alt="avatar" />
            </div>
            <div className="col-12 col-lg-5">
              <div className="register-item">
                <label className="register-item_label">Email</label>
                <input
                  {...register('email')}
                  name="email"
                  className="register-item_input"
                  id="email"
                  placeholder="Email"
                  disabled
                />
                <span className="mess_err">{errors.email?.message}</span>
              </div>

              <div className="register-item">
                <label className="register-item_label">Password</label>
                <input
                  {...register('password')}
                  name="password"
                  className="register-item_input"
                  id="password"
                  placeholder="Password"
                  disabled
                />
                {/* <span className="mess_err">{errors.password?.message}</span> */}
              </div>
            </div>

            <div className="col-12 col-lg-5">
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

              <fieldset name="gender" className="profile-gender register-gender profile_res" id="gender">
                <div className="d-flex w-100 justify-content-around">
                  <p>Gender</p>
                  <p>
                    <input {...register('gender')} type="radio" id="male" value={true} defaultChecked />
                    <label htmlFor="male">Male</label>
                  </p>
                  <p>
                    <input {...register('gender')} type="radio" id="female" value={false} />
                    <label htmlFor="female">Female</label>
                  </p>
                </div>
                <div className="register-btnSubmit profile-btnSubmit_res">
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
          {renderOrderHistory()}
        </div>
      </div>
    </section>
  );
}
//
