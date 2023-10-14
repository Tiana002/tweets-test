import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Link, Paragraph, Logo, Text } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Loader from '../Loader/Loader';

function SharedLayout() {
  return (
    <>
    <Toaster />
      <Header>
      <Logo>
          <Text>Tweets</Text>
          <AiFillTwitterCircle />
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer>
        <Paragraph>
        Follow me.....
        </Paragraph>
      </Footer>
      
    </>
  );
}

export default SharedLayout;



