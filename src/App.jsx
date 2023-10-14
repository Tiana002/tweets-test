import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { ScrollToTopArrow } from './components/ScrollToTop/ScrollToTop';

const Home = lazy(() => import('../src/pages/Home/Home'));
const Tweets = lazy(() => import('../src/pages/Tweets/Tweets'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ScrollToTopArrow />
      <GlobalStyle />
    </>
  );
};