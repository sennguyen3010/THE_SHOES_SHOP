import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessError } from '../../redux/reducers/userReducer';

export default function Notification() {
  const { messError } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (messError) {
      let timeout = setTimeout(() => {
        dispatch(setMessError(''));
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messError, dispatch]);

  return (
    <div>
      {messError ? (
        <div className="notification">
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <p>{messError}</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
