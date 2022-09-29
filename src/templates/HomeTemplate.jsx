import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';

export default function HomeTemplate() {
  return (
    <>
      <Loading />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
