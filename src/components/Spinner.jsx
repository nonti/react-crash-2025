import FadeLoader from 'react-spinners/FadeLoader';

const override = {
  diplay: 'block',
  margin: '100px auto',
};
const Spinner = ({loading}) => {

  return (
    <FadeLoader
      loading={loading}
      cssOveride={override}
      size={150}
    />
  );
};

export default Spinner;