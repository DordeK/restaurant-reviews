import ReactLoading from "react-loading";


function Loader() {
  return  <ReactLoading style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '100px', width: '100px'}} type='spinningBubbles' color="black" />
}

export default Loader