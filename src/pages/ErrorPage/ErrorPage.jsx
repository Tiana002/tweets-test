import { Container, Img } from './ErrorPage.styled';
import bird from '../../assets/404.png';



const ErrorPage = () => {
  return (
    <Container>
      <Img src={bird} width="50%" alt="error" />
    </Container>
  );
};

export default ErrorPage;
