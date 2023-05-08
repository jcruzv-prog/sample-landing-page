import Head from 'next/head';
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import Snackbar from '@mui/material/Snackbar';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





export default function Home(){

const firebaseConfig = {

  apiKey: "AIzaSyAElwg1iJK0SrIj3UAfXr1wzCahaq1AGF4",

  authDomain: "sample-landing-page-82a2c.firebaseapp.com",

  projectId: "sample-landing-page-82a2c",

  storageBucket: "sample-landing-page-82a2c.appspot.com",

  messagingSenderId: "457547769095",

  appId: "1:457547769095:web:bbd63a382958d21d4f11a2",

  measurementId: "G-PB0MKZ9K9S"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const[open, setOpen] = useState(false);
const[message, setMessage] = useState("");   
  const handleSignUp = (event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get('email');
    let password = data.get('password');
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential=>{
          setMessage("Successfully created user!");
          setOpen(true);
      })
    .catch(error=>{
        if(error.code=='auth/email-already-in-use'){
          setMessage('Error: Email already exists');
          setOpen(true);
        }
        else{
          setMessage('Error creating the account');
          setOpen(true);
        }
      })
  }
  
  const handleClose = () => {
    setOpen(false);
  };
  return(
<>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Landing on Next Material</title>
      </Head>
      <CssBaseline />
        <Container component="main" maxWidth="md" 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <Typography component="h1" variant='h4'sx={{mt:2}} >
          Simple Landing on Next Js and Material
          </Typography>
        </Box>
      <Box component="form" onSubmit={handleSignUp}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '400px',
            mt:7
          }}  
      >   <Avatar sx={{mb:1, bgcolor:'navy'}}>
          <KeyOutlinedIcon />
          </Avatar> 
          <Typography component="h2" variant='h5' sx={{mb:2}}>
          Log In
          </Typography>
      <TextField id="email" name='email' label="Email" variant="outlined" type="email" required fullWidth sx={{mb:2}} />
      <TextField id="password" name='password' label="Password" type="password" variant="outlined" required fullWidth />
      <Button type='submit' variant='contained' sx={{mt:1}} fullWidth >Sign up</Button>
          <Snackbar
        open={open}
        autoHideDuration={6000}
        message={message}
        onClose={handleClose}
      />
      </Box>
      </Container>
    </>
  );
}
