import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/styles.scss';

//react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import Carts from './pages/Carts/Carts';

//redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import HomeMobile from './pages/Home/HomeMobile';
import ResponsiveItem from './hoc/ResponsiveItem';
import HomeTemplateMobile from './templates/HomeTemplateMobile';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <ScrollToTop>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            {/* <Route path="" element={<ResponsiveItem component={HomeTemplate} componentMobile={HomeTemplateMobile} />}> */}
            {/* <Route index element={<ResponsiveItem component={Home} componentMobile={HomeMobile} />}></Route> */}
            {/* <Route index element={<HomeMobile />}></Route> */}
            <Route path="" element={<Home />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="search" element={<Search />}></Route>
            <Route path="detail">
              <Route path=":id" element={<Detail />}></Route>
            </Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="carts" element={<Carts />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
            {/* </Route> */}
          </Route>
        </Routes>
      </ScrollToTop>
    </HistoryRouter>
  </Provider>
);
