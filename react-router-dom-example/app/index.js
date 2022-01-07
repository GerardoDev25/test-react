import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.min.css';

import AboutPages from './pages/AboutPages';
import HomePages from './pages/HomePages';
import UserPage from './pages/UserPage';
import NotFount from './pages/NotFount';

import NavBar from './components/NavBar';
import UsersPage from './pages/UsersPage';
import Dasbhoard from './pages/Dasbhoard';

const index = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/:userId" element={<UsersPage />} />
        <Route path="/usuarios" element={<Navigate replace to="/user" />} />
        <Route path="/dasbhoard/*" element={<Dasbhoard />}>
          <Route path="welcome" element={<p>Welcome</p>} />
          <Route path="goodbye" element={<p>goodbye</p>} />
        </Route>
        <Route path="*" element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
