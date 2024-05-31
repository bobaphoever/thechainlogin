import styles from "../styles/Home.module.css";
import Image from "next/image";
import EmailLogin from "../components/EmailLogin";
import { NextPage } from "next";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { SocialLoginButton } from "../components/SocialLogin";

const Home: NextPage = () => {
  const address = useAddress();


  return (
    <div>
      {address ? (
        <ConnectWallet />
      ) : (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            height: "100vh",
          }}>

         </div>
         <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              borderBottom: '1px solid #EEE',
              height: '100%'
            }}>
              <div style={{
                minWidth: "80%"
              }}>
                <h1>Welcome to The Chain</h1>
                <EmailLogin />
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '2rem',
                  marginBottom: '1rem',
                  color: '#CCC'
                }}>
                  <hr style={{ width: "45%", borderTop: "1px solid #CCC" }}/>
                  <p>or</p>
                  <hr style={{ width: "45%", borderTop: "1px solid #CCC" }} />
                </div>
                <SocialLoginButton strategy="google" />
                <SocialLoginButton strategy="facebook" />
                <SocialLoginButton strategy="apple" />
              </div>
            </div>
         <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          height: '100vh',
          backgroundColor: '#EEE',
          backgroundImage: 'url(https://th.bing.com/th/id/OIG1.ltIMBM7MxLJ7pWlTF9TA?pid=ImgGn)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
         }}></div>
        </div> 
      )}
    </div>
  );
};

export default Home;
