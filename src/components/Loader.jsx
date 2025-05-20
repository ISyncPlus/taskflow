import React from 'react'
import { PuffLoader } from 'react-spinners'
const Loader = ({ loading }) => {
  const override ={ 
    display: "block",
    margin: "30% auto"
  }
  return (
    <div>
      <PuffLoader 
      color="#5577FF"
      cssOverride={override}
      loading={loading}
      size={150}
      />
      
    </div>
  )
}

export default Loader
