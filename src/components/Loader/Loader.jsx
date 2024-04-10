import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = ({ loading }) => {
  return loading ? (
    <LoaderWrapper loading={loading}>
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
    </LoaderWrapper>
  ) : null;
};

export default Loader;
