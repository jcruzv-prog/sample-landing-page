import Head from 'next/head';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
export default function Home(){
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
      <Box
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
      <TextField id="username" label="Username" variant="outlined" required fullWidth sx={{mb:2}} />
      <TextField id="password" label="Password" type="password" variant="outlined" required fullWidth />
      <Button variant='contained' sx={{mt:1}} fullWidth >Log In</Button>
      </Box>
      </Container>
    </>
  );
}
