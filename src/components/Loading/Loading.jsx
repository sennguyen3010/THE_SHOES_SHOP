import React from 'react';
import { useSelector } from 'react-redux';

export default function Loading() {
  const { isLoading } = useSelector((state) => state.loadingReducer);

  if (isLoading) {
    return (
      <div className="loading">
        <img className="loading_img" src="./img/loading5.gif" alt="..." />
      </div>
    );
  }
  return '';
}
