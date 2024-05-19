import ClipLoader from 'react-spinners/ClipLoader';
const override = {
    color: '#4338ca',
    display: 'block',
    margin: '100px auto',
  };
  
const Spinner = ({loading}) =>{
    return <ClipLoader cssOverride={override} loading={loading} size={150} />
}
export default Spinner;