import { Main, Svg } from './Home.styled';
import bird from '../../assets/bird_1.png';

function Home() {
  return (
    <Main>
      <Svg src={bird} width="25%" alt="bird" />
    </Main>
  );
}

export default Home;

