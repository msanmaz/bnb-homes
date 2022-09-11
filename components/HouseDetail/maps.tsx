import React, { ReactElement } from 'react'
import { Wrapper,Status } from "@googlemaps/react-wrapper";
import MyMapComponent from './my-map.tsx';

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

const Maps = () => {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 10;
  return (
    <div className='flex justify-center px-6 md:px-[6.5rem] md:py-[4rem] py-6'>
    <Wrapper apiKey={"AIzaSyCKkFZQgHlifUWnCflPEK2CzsmAD-9D-24"} render={render}>
    <MyMapComponent center={center} zoom={zoom}/>
  </Wrapper>
  </div>



  )
}




export default Maps

