import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Oval
        height={100}
        width={100}
        color="var(--primary-color)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
      <h3 style={{ color: 'white', fontSize: '22px' }}>Loading...</h3>
    </LoaderWrapper>
  );
};

export default Loader;
