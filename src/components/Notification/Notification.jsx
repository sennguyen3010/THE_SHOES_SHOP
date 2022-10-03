import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMessError } from '../../redux/reducers/userReducer';

export default function Notification(props) {
  const { messError } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    let notice = setTimeout(() => {
      const action = setMessError('');
      dispatch(action);
      console.log('effect');
    }, 3000);
    return () => {
      clearTimeout(notice);
    };
  }, []);
  return (
    <div>
      {messError ? (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <p>{messError}</p>
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" /> */}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
