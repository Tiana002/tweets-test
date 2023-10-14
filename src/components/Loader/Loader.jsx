import { MutatingDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
    return (
    <LoaderContainer>
        <MutatingDots  
            height="100"
            width="100"
            color="#ba7ae9"
            secondaryColor= '#625df5'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true} />
    </LoaderContainer>
);
};

export default Loader;