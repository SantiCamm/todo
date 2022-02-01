import React, { useContext, Dispatch, SetStateAction } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { Container, Group, Image, Title } from '@mantine/core';
import Logo from "../images/logo.png"
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { googleLogin } = useContext(GlobalContext);
  const navigate = useNavigate();

  const googleSuccess = (res: any) => {
    const token = res?.tokenId;
    googleLogin(token, navigate);
    navigate("/todos")
  }

  const googleFailure = () => {
    console.log("Google auth failed");
  }

  return (
    <div className="loginPage">
      <Group direction="column" styles={(theme) => ({
        root: {
          width: "500px",
          height: "500px",
          backgroundColor: "white",
          borderRadius: "5px",
          padding: "15px",
          alignItems: "center",
          justifyContent: "space-around",

          '@media (max-width: 800px)': {
            width: "300px",
          },
        },
      })}>
        <div>
          <Image alt="Logo" src={Logo} width={100} withPlaceholder />
          <Title order={1}>TODOS</Title >
        </div>
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy={'single_host_origin'}
        />
      </Group >
    </div>
  )
};

export default Login;
