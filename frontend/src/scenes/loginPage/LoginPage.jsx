import React from 'react';
import { Link } from 'react-router-dom'; 
import { Typography } from "@mui/material";
import Form from "./Form";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import './Login.css';

const LoginPage = () => {
  return (
    <MDBContainer className="my-5 gradient-form">
  <MDBRow>
    <MDBCol col='6' className="mb-5">
      <div className="d-flex flex-column ms-5">
        <div className="text-center">
          <img src="./src/assets/logo.png" style={{ width: '185px' }} alt="logo" />
          <h4 className="mt-1 mb-5 pb-1">Welcome to Conex</h4>
        </div>
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          We are greatful to welcome you!
        </Typography>
        <Form />
      </div>
    </MDBCol>
    {/* Add a class to the MDBCol containing the side image */}
    <MDBCol col='6' className="mb-5 side-image">
      <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
          <h4 className="mb-4">We are more than just a company</h4>
          <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </MDBCol>
  </MDBRow>
</MDBContainer>

  );
}

export default LoginPage;
