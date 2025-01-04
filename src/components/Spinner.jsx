import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  diplay: 'block',
  margin: '100px auto',
};
const Spinner = ({loading}) => {

  return (
    <ClipLoader
      loading={loading}
      cssOveride={override}
      size={150}
    />
  );
};


Spinner.propTypes = {
  loading: false
}

export default Spinner;